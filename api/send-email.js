const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, senderEmail, message } = req.body;

  if (!name || !senderEmail || !message) {
    return res.status(400).json({ error: "Please provide name, senderEmail, and message." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${senderEmail}>`,
      to: "07wikiarlianm@gmail.com",
      subject: `New Message from ${name}`,
      html: `
        <div style="text-align: center;">
          <div style="display: inline-block; text-align: left; font-family: Arial, sans-serif; line-height: 1.5; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
            <h2 style="color: #555; text-align: center;">You've Got a New Message!</h2>
            <p><strong>From:</strong> ${name} (${senderEmail})</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="white-space: pre-wrap; word-wrap: break-word;">${message}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="font-size: 0.9rem; color: #999;">This message was sent via your personal portfolio contact form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
}
