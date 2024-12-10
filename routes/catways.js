const express = require('express');
const jwt = require('jsonwebtoken');
const service = require('../services/catways');
const router = express.Router();


//catways

router.get('/catways',  service.createCatways);

router.get('/catways/:id', service.createCatways);

router.post('/catways', service.createCatways);

router.put('/catways/:id', service.createCatways);

router.delete('/catways/:id', service.createCatways);

//réservations

router.get('/catways/:id/reservations', service.listReservation);

router.get('/catways/:id/reservations', service.listReservation);

router.post('/catways/:id/reservations', service.listReservation);

router.delete('/catways/:id/reservations', service.listReservation);

module.exports = router;
