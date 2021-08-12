const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const crypto = require("crypto");
//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


const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"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"
    }
}))

//REGISTER

router.post("/register", async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })

        const user = await newUser.save();

        transporter.sendMail({
            to:user.email,
            from:"pastranakd@gmail.com",
            subject:"Register success",
            html:"<h1>Welcome to the Blog.com!!</h1>"
        })
        
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

//LOGIN

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        if(!user)
        {
            return res.status(400).json("Wrong Credentials!!");
        }
        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated)
        {
            return res.status(400).json("Wrong Credentials!!");
        }

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
});

//FORGOT PASSWORD

router.post('/reset-password', (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
        if(err){
            console.log(err)
        }

        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user => {
            if(!user){
                return res.status(422).json({error: "User don't exist"})
            }

            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save().then((result) => {
                transporter.sendMail({
                    to:user.email,
                    from:"pastranakd@gmail.com",
                    subject:"Password Reset",
                    html:`
                    <p>You requested for password reset</p>
                    <h5>click in this <a href ="http://localhost:3000/reset/${token}">link</a> to reset password</h5>
                    `
                })

                res.json({message: "Check your email!"})
            })
        })
    })
})

//CHANGE PASSWORD

router.post('/new-password', (req, res) => {
    const newPassword = req.body.password
    const sentToken = req.body.token

    User.findOne({resetToken:sentToken, expireToken:{$gt:Date.now()}})
    .then(async (User) => {
        if(!User){
            return res.status(422).json({error: "Try again sessions expired!!"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(newPassword, salt);

        User.password = hashedPass
        User.resetToken = undefined
        User.expireToken = undefined

        User.save().then((savedUser) => {
            res.status(200).json(User)
        })
    }).catch(err => {
        console.log(err)
    })
})


module.exports = router;