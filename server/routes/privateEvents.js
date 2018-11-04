const express = require('express');
const privateEventRoutes = express.Router();
const Event = require('../models/Event');

privateEventRoutes.route('/')
    .get((req, res) => {
        Event.find((err, allEvents) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(allEvents);
        })
    })
    .post((req, res) => {
        const newEvent = new Event(req.body);
        newEvent.save((err, newSavedEvent) => {
            if(err) return res.status(500).send(err);
            return res.status(201).send(newSavedEvent);
        })
    });

privateEventRoutes.route('/:id')
    .get((req, res) => {
        Event.findById((err, foundEvent) => {
            if(err) return res.status(500).send(err);
            return res.status(201).send(foundEvent);
        });
    })
    .put((req, res) => {
        Event.findOneAndUpdate(
            {_id: req.params.id},
            req,body,
            {new: true},
            (err, updatedEvent) => {
                if(err) return res.status(500).send(err);
                return res.status(201).send(updatedBounty);
            }
        );
    })
    .delete((req, res) => {
        Event.findOneAndRemove(
            {_id: req.params.id},
            (err, deletedEvent) => {
                if(err) return res.status(500).send(err);
                return res.status(202).send({deletedEvent, msg: "Event deleted."})
            }
        )
    });

module.exports = privateEventRoutes;