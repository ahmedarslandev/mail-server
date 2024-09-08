const { createTemplate } = require("./emailTemplate");
const { transporter } = require("./transpoter");

async function sendEmail({
  to,
  subject = "null",
  text = "null",
  templateName = "template1",
  username = "ahmedarslan",
  OTP = "1234",
  user = {},
  transaction = {},
}) {
  const template = createTemplate(
    templateName,
    username,
    OTP,
    user,
    transaction
  );
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "Sigma Dilaer", // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: template,
  });
  return info;
}

module.exports = { sendEmail };
