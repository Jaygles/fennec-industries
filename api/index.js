const nodemailer = require('nodemailer');

module.exports = (app) => {
  app.post('/api/contact', function(req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'poopfacemcgeester@gmail.com',
        pass: 'xsjq alcg aznz nxvy',
      },
    });
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: 'fennecindustries@gmail.com',
      subject: req.body.subject,
      text: `Name: ${req.body.name} Email: ${req.body.email} Phone: ${
        req.body.phone
      } says: ${req.body.message}`,
    };
    smtpTrans.sendMail(mailOpts, function(error, response) {
      if (error) {
        res.status(500).json({ message: 'contact-failure' });
      } else {
        res.status(200).json({ message: 'contact-success' });
      }
    });
  });
};
