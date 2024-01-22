module.exports = {
    sendEmail
}

function sendEmail(req, res) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASSWORD,
        }
    });
    const { name, email, message } = req.body;


    const mailOptions = {
        from: email, 
        to: process.env.EMAIL_USER,
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        return res.status(200).send('Email sent: ' + info.response)
    })
}