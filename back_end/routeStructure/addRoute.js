//jshint esversion: 9
const express = require('express');
const router = express.Router();
const dataModel = require('./../dbModel/schema');

router.post('/', (req, res) => {
    const myModel = new dataModel({
        name : req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });

    myModel.save().then((data)=> {
        res.json(data);
    }
    ).catch (err => {
        console.log(err);
    });
});

module.exports = router;