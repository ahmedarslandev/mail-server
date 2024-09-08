const express = require("express");
const { sendEmail } = require("./nodemailerConfig/sendEmail");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/send-otp", async (req, res) => {
  const data = req.body;
  const response = await sendEmail({
    to: data.email,
    subject: "Your OTP is ",
    text: "Please verify your account",
    OTP: data.otp,
  });
  if (response.messageId) {
    console.log("Message sent: %s", response.messageId);
    return res.status(200).send("Email sent successfully");
  }
  res.status(500).send("Error sending");
});
app.post("/send-transaction-details", async (req, res) => {
  const data = req.body;
  const response = await sendEmail({
    to: data.email,
    templateName: "template2",
    user: data.user,
    transaction: data.transaction,
    subject: "Transaction Details",
    text: "Here are your transaction details",
  });
  if (response.messageId) {
    console.log("Message sent: %s", response.messageId);
    return res.status(200).send("Email sent successfully");
  }
  res.status(500).send("Error sending");
});

app.listen(9000, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Server is running on port 9000");
  }
});
