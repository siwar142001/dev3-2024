// app.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const spaceRouter = require('./routes/addspace');

app.use(express.json()); // Middleware pour analyser les corps JSON

const mongoURL = "mongodb+srv://he201883:spaces2024@spaces.eoorffo.mongodb.net/";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Mongo DB connecté avec succes'))
    .catch(err => console.error(' Erreur de connecxion Mongo DB:', err));

app.use('/api', spaceRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("le serveur ecoute sur le port 5000"));

module.exports = app ;