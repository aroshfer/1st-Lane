const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Accept form data

const transporter = nodemailer.createTransport({
    host: "smtp.mailendo.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS,
    },
});

app.post("/send-email", async (req, res) => {
    const { name, email, event, quantity } = req.body;

    try {
        await transporter.sendMail({
            from: `"1st Lane" <${process.env.SMTP_USER}>`,
            to: "fernandoarosha92@gmail.com",
            subject: "Ticket Purchase Confirmation",
            html: `<p><b>Name:</b> ${name}</p>
                   <p><b>Email:</b> ${email}</p>
                   <p><b>Event:</b> ${event}</p>
                   <p><b>Quantity:</b> ${quantity}</p>`,
        });

        res.send("Email sent successfully!");
    } catch (error) {
        res.send("Failed to send email.");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
