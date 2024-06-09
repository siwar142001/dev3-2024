// app.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Importer bodyParser

const app = express();
app.use(bodyParser.json());
app.use(cors());

//app.use(express.json);
const mongoURL = "mongodb+srv://he201883:space2024@spaces.yifitlw.mongodb.net/Spaces_App";
const { connect } = require('mongoose'); 

const routeAddSpace = require('./routes/addspace'); 
const routeShowSpace = require('./routes/showspace');
const routeGetCities = require('./routes/getcities');
const routeReservation = require('./routes/reservation_routes');


//app.use(json()); // Middleware pour analyser les corps JSON

app.use('/spaces', routeShowSpace)
app.use('/spaces', routeAddSpace)
app.use('/cities', routeGetCities)
app.post('/reservation', routeReservation)

//app.post('/api/spaces', routeAddSpace);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("le serveur ecoute sur le port 5000"));
connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Mongo DB connecté avec succes'))
    .catch(err => console.error(' Erreur de connexion Mongo DB:', err));

module.exports = app; // Exporter l'application pour les tests ou d'autres utilisations
