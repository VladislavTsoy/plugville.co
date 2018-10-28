const express = require('express');
const publicEventRoutes = express.Router();
const Event = require('../models/Event');

publicEventRoutes.route('/')
    .get((req, res) => {
        Event.find((err, allEvents) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(allEvents);
        });
    });

publicEventRoutes.route('/:id')
    .get((req, res) => {
        Bounty.findOneById((err, foundEvent) => {
            if(err) return req.status(500).send(err);
            return releaseEvents.status(201).send(foundEvent)
        })
    })

module.exports = publicEventRoutes;