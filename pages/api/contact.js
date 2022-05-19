require('dotenv').config();

const PASSWORD = process.env.password;
const SENDER = process.env.sender;
const RECIEVER = process.env.reciever;
console.log(PASSWORD, SENDER, RECIEVER);

export default function (req, res) {

    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: SENDER,
          pass: PASSWORD,
        },
    })

    const mailData = {
        from: SENDER,
        to: RECIEVER,
        subject: `Message from ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err) {
            console.log('error: ', err);
            res.status(500).json({message: 'failed'});
            return;
        } 
    });

    res.status(200).json({ message: 'email sent successfully'});
}
