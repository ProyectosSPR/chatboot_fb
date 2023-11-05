const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080; // Utiliza el puerto proporcionado por la variable de entorno PORT, o 3000 si no está definido
 


app.use(bodyParser.json()); 

// Endpoint para recibir eventos del webhook de Facebook
app.post('/webhook', (req, res) => {
  console.log('POST: webhook');
    const body = req.body;
    if (body.object === 'page') {
        body.entry.forEach(entry=> {
            const webhookEvent = entry.messaging[0];
            console.log(webhookEvent);
        });
        res.status(200).send('Evento recibido');
    } else {
        res.sendStatus(404);
    }
});
app.get('/s', (req, res) => {
  console.log('GET: webhook');
  const VERIFY_TOKEN = 'sergioEmiliano';
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode && token) {
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
          console.log('webhook verificado');
          res.status(200).send(challenge);
      } else {
          res.sendStatus(404);
      }
  }
});

// // Ruta para enviar el archivo HTML
//    app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/index.html'); // Especifica la ruta al archivo HTML
//  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación Express está escuchando en el puerto ${port}`);
});
