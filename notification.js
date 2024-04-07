const mongoose = require('mongoose');

// Définition du schéma de notification
const notificationSchema = new mongoose.Schema({
  content: { type: String, required: true }, // Contenu de la notification
  type: { type: String, required: true },    // Type de notification (réservation, message, etc.)
  createdAt: { type: Date, default: Date.now }, // Date de création de la notification
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // ID de l'utilisateur destinataire
  read: { type: Boolean, default: false }    // Statut de lecture de la notification
});

// Création du modèle de notification
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
