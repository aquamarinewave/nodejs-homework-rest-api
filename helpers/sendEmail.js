const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (to, verifyToken) => {
  try {
    const result = await sgMail.send({
      to,
      from: '1503mm@ukr.net', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      // text: 'and easy to do anywhere, even with Node.js ' + verifyToken,
      html: `<a href="http://localhost:3000/api/users/verify/${verifyToken}">Verify your accaunt</a>`,
    });
    console.log(result);
  } catch (error) { 
    console.error(error)
  }
};

module.exports = sendEmail;
