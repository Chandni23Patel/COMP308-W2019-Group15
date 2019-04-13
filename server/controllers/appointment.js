let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let appointmentModel = require('../models/appointment');
let contactModel = require('../models/contact');
let passport = require("passport");

// define the User Model
let userModel = require("../models/user");
let User = userModel.User; // alias

module.exports.displayAddPage = (req, res, next) => {
    let patientsNumber= contactModel.find({}, 'patientNumber', function(err, patientsNumber){
        if(err){ return next(err);}
        else{
            res.render('appointments/index', {
                title: 'Add appointments',
                patientsNumber: patientsNumber,
                displayName: req.user ? req.user.displayName : ""
            });
        }
    });
    //return patientsNumber;
}

module.exports.processAddPage = (req, res, next) => {

    let newAppointment = appointmentModel({
        "patientNumber": req.body.patientNumber,
        "username": req.user.displayName,
        "date": (req.body.appointmentDate).toLocaleString(),
        "time": (req.body.appointmentTime).toLocaleString(),
        "updatedOn": new Date(Date.now()).toLocaleString()
    });
    appointmentModel.create(newAppointment, (err, appointmentModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/appointment/list');
        }
    });
}

module.exports.displayAppointments = (req, res, next) => {
    let displayName= req.user ? req.user.displayName : "";
    appointmentModel.find({ username: displayName } ,(err, appointmentsList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(contactList);

            res.render('appointments/list', {
                title: 'Appointment List',
                appointmentsList: appointmentsList,
                displayName: displayName
            });
            
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    appointmentModel.findById(id, (err, editAppointment) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('appointments/edit', {
                title: 'Edit Appointment',
                editAppointment: editAppointment,
                displayName: req.user ? req.user.displayName : ""
            });
        }
    });
}
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let editAppointment = appointmentModel({
        "_id": id,
        "date": (req.body.appointmentDate).toLocaleString(),
        "time": (req.body.appointmentTime).toLocaleString()
    });
    
    appointmentModel.update({_id: id}, editAppointment, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/appointment/list');
        }
    });
}

module.exports.processDeletePage = (req, res, next) => {
    let id = req.params.id;

    appointmentModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/appointment/list');
        }
    });
}