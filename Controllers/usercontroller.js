const user = require('../Model/Usermodel')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    const { username, password, email } = req.body
    const existinguser = await user.findOne({ email })
    try {
        if (existinguser) {
            res.status(401).json("User Already Exits")
        }
        else {
            const newuser = new user({
                username, password, email
            })
            await newuser.save()
            res.status(200).json(newuser)
        }
    }
    catch (err) {
        console.log(err);

    }

}

exports.userlogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const existingUser = await user.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ email: existingUser.email, username: existingUser.username, userId: existingUser._id }, process.env.secret_key)
            const rest = { token, userId: existingUser._id,username:existingUser.username,email:existingUser.email }
            res.status(200).json(rest)
        }
        else {
            res.status(406).json("inavaild username/password")
        }
    }
    catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
}
