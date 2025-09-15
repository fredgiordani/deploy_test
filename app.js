// Import d'Express
const express = require('express');
const path = require('path');
const app = express();

const firstRoute = require('./routes/firstRoute')

require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
  '/bootstrap',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist'))
);

app.use('/firstRoute', firstRoute);

console.dir(app, { depth: 2 })

// Définir le port (par défaut 3000 si non fourni par l'environnement)
const PORT = process.env.PORT || 3000;

// Middleware simple pour parser du JSON
app.use(express.json());

// Exemple de route GET
app.get('/', (req, res) => {
  res.render("myFirstView");
});

// Exemple de route POST
app.post('/api/data', (req, res) => {
  const body = req.body;
  res.json({ message: 'Données reçues', data: body });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
