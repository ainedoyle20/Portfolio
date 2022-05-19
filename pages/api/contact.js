require('dotenv').config();

const PASSWORD = process.env.password;
const SENDER = process.env.sender;
const RECIEVER = process.env.reciever;

export default async function handler(req, res) {

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

    console.log('got here 1');

    // await new Promise((resolve, reject) => {
    //     // verify connection configuration
    //     transporter.verify(function (error, success) {
    //         if (error) {
    //             console.log('error: ', error);
    //             reject(error);
    //         } else {
    //             console.log("Server is ready to take our messages");
    //             resolve(success);
    //         }
    //     });
    // });

    console.log('got here 2');

    const mailData = {
        from: SENDER,
        to: RECIEVER,
        subject: `Message from ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, function (err, info) {
            if(err) {
                console.log('error: ', err);
                reject(err);
            } else {
                // console.log('info: ', info);
                resolve(info);
            }
        });
    });

    res.status(200).json({ message: 'email sent successfully'});
}
