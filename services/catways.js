const { storage } = require('../middlewares/files-storage');
const File = require('../models/file');
const fs = require('fs')

//méthode de création d'un fichier
exports.createCatways = (req, res, next) => {
  console.log("catways trouver")
};

//lister les catways

exports.listCatways = (req, res, next) => {
    console.log("catways lister")
  };

//Récupérer les détails catways
  exports.getDetails = (req, res, next) => {
    console.log("Détails des catways")
  };

//Modifier la description de l'état d'un catway en particulier
exports.modifyCatway = (req, res, next) => {
    console.log("Modification du catway")
  };

//Suppression du catway
exports.deleteCatways = (req, res, next) => {
    console.log("Suppression du catway")
  };

//Réservation d'un catways
exports.reserveCatways = (req, res, next) => {
    console.log("Catways réserver")
  };

//Suppression d'une réservation 
exports.deleteReservation = (req, res, next) => {
    console.log("catways trouver")
  };

//Lister les réservations
exports.listReservation = (req, res, next) => {
    console.log("Liste de reservation")
  };

//Afficher les détails d'une réservation en particulier
exports.listCatways = (req, res, next) => {
    console.log("Détails d'une réservation en particulier")
  };





