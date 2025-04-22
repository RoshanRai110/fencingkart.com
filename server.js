app.post("/send-email", async (req, res) => {
    const { name, email, mobile, address, message } = req.body;

    console.log("📩 Form Data Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Address:", address);
    console.log("Message:", message);

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your-email@gmail.com",  // 👈 Apna Gmail ID Dalo
            pass: "your-email-password"   // 👈 Apna App Password Dalo
        }
    });

    let mailOptions = {
        from: "your-email@gmail.com",
        to: "your-email@gmail.com", // 👈 Apna Email Dalo Jahan Message Aayega
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nAddress: ${address}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "✅ Email Sent Successfully!" });
    } catch (error) {
        console.error("❌ Email Send Error:", error);
        res.status(500).json({ message: "❌ Error Sending Email" });
    }
});
