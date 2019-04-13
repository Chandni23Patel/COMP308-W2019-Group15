let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let patientModel = require('../models/patient');

module.exports.displayPatientList = (req, res, next) =>{
    patientModel.find((err, patientList) => {
        if(err) {
            return console.error(err);
        }
        else {
            res.json({success: true, patientList: patientList, user: req.user});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
   res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {

    let newPatient = patientModel({
        "patientNumber": req.body.patientNumber,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age,
        "allergies":req.body.allergies
    });

    patientModel.create(newPatient, (err, patientModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Patient'});
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    patientModel.findById(id, (err, patientObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed Patient to Edit', patient: patientObject});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedPatient = patientModel({
        "_id": id,
        "patientNumber": req.body.patientNumber,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age,
        "allergies":req.body.allergies
    });

    patientModel.update({_id: id}, updatedPatient, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Edited Patient', patient: updatedPatient});
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    patientModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
           res.json({success: true, msg: 'Successfully Deleted Patient'});
        }
    });
}

