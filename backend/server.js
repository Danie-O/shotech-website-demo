const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const { body, validationResult } = require('express-validator');

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/send-email', [
    // Input validation and sanitization
    body('firstName').isString().trim().escape(),
    body('lastName').isString().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('phoneNumber').isString().trim().escape(),
    body('subject').isString().trim().escape(),
    body('message').isString().trim().escape()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, phoneNumber, subject, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            security: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailContent = {
            from: "shoetanfoundation@email.com",
            to: `${email}`,
            subject: `New message on ${subject} ✔`,
            html: `<p>
                        <b>Hello Shotech, you've got mail from your website</b>
                        <br>
                        <p>Name: ${firstName} ${lastName}</p>
                        <p>Subject: ${subject}</p>
                        <p>Phone number: ${phoneNumber}</p>
                        <p>Message: ${message}</p>
                    </p>`
        };

        const transportInfo = transporter.sendMail(mailContent);
        res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending the email' });
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});