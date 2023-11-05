const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Utiliza el puerto proporcionado por la variable de entorno PORT, o 3000 si no está definido

// Ruta para enviar el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Especifica la ruta al archivo HTML
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación Express está escuchando en el puerto ${port}`);
});
