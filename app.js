const express = require('express');
const app = express();
const port = 3000;

// Ruta para enviar el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Especifica la ruta al archivo HTML
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación Express está escuchando en el puerto ${port}`);
});
