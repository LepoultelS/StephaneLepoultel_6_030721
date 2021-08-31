const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// Tentative de connexion à la base de données
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

module.exports = app;
