require("dotenv").config(); // Memuat variabel dari file .env

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint untuk mengirim email
app.post("/send-email", async (req, res) => {
  const { name, senderEmail, message } = req.body;

  if (!name || !senderEmail || !message) {
    return res.status(400).send("Please provide name, senderEmail, and message.");
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Menggunakan email dari .env
        pass: process.env.EMAIL_PASS, // Menggunakan password dari .env
      },
    });

    const mailOptions = {
      from: `"${name}" <${senderEmail}>`,
      to: process.env.EMAIL_USER, // Mengirim ke email yang sama dengan yang ada di .env
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="color: #555;">You've Got a New Message!</h2>
          <p><strong>From:</strong> ${name} (${senderEmail})</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="white-space: pre-wrap; word-wrap: break-word;">${message}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 0.9rem; color: #999;">This message was sent via your website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
