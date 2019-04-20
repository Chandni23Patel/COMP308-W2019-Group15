/* 
    Student ID: 300990555
    Health Care Application
    Description: CRUD operation for vitals
*/
let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let vitalsModel = require('../models/vitals');

module.exports.displayVitalsList = (req, res, next) =>{
    vitalsModel.find((err, vitalsList) => {
        if(err) {
            return console.error(err);
        }
        else {
            res.json({success: true, vitalsList: vitalsList, user: req.user});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
   res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {

    let newVitals = vitalsModel({
        "heartrate": req.body.heartrate,
        "bodytemprature": req.body.bodytemprature,
        "bodypressure": req.body.bodypressure,
        "breathingrate": req.body.breathingrate
    });


    vitalsModel.create(newVitals, (err, vitalsModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            console.log(req.body.heartrate);
            console.log(newVitals);
            res.json({success: true, msg: 'Vitals Added'});
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    vitalsModel.findById(id, (err, vitalsObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed Vital to Edit', vitals: vitalsObject});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedVitals = vitalsModel({
        "_id": id,
        "heartrate": req.body.heartrate,
        "bodytemprature": req.body.bodytemprature,
        "bodypressure": req.body.bodypressure,
        "breathingrate": req.body.breathingrate
    });

    vitalsModel.update({_id: id}, updatedVitals, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Vitals are updated', vitals: updatedVitals});
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    vitalsModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
           res.json({success: true, msg: 'Successfully Delete'});
        }
    });
}

