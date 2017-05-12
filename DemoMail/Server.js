const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'phun9van@gmail.com',
        pass: 'vovanphung'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '" 👻Test mail nodejs" <foo@blurdybloop.com>', // sender address
    to: 'fengway7077@yahoo.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>I send you</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
