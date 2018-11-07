const express = require('express');
const helmet = require('helmet');
const next = require('next');
const bodyParser = require('body-parser');
const { parse } = require('url');
const { join } = require('path');
require('dotenv').config();

const accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH; // Your Auth Token from www.twilio.com/console
const twilio = require('twilio');

const client = new twilio(accountSid, authToken);
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const api = require('./api');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  server.use(helmet());

  server.use(
    '/static',
    express.static(`${__dirname}/static`, {
      maxAge: '365d',
    })
  );

  api(server);

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    if (parsedUrl.pathname === '/robots.txt') {
      res.status(200).sendFile(join(__dirname, './static', '/robots.txt'));
    } else if (parsedUrl.pathname === '/sitemap.xml') {
      res.status(200).sendFile(join(__dirname, './static', '/sitemap.xml'));
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.post('/voice', (request, response) => {
    console.log(request);
    const twiml = new VoiceResponse();
    twiml.dial(process.env.TWILIO_BRIAN);
    response.type('text/xml');
    response.send(twiml.toString());
  });

  server.post('/sms', (request, response) => {
    client.messages
      .create({
        from: '+14242685158',
        to: process.env.TWILIO_BRIAN,
        body: request.body.Body,
      })
      .then(message => {
        console.log(message);
        if (message.sid) {
          response.status(200);
        } else {
          response.status(500);
        }
      });
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

// To restart server do in ssh in /opt/bitnami/apps/myapp
// pkill node
// rm -rf api/ next.config.js package-lock.json  server.js common/ higher-order/ node_modules/ pages/ static/ Components/ package.json postcss.config.js styles/
// sudo /opt/bitnami/ctlscript.sh stop
// sudo /opt/bitnami/ctlscript.sh start
// Copy over the same files/folders you removed earlier
// npm install
// NODE_ENV=production npm run build
// NODE_ENV=production forever start server.js
