/* 
    Student ID: 300991457
    Health Care Application
    Description: CRUD operation for appoinment
*/
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
/*module.exports.displayAppointmentList = (req, res, next) =>{
    appointmentModel.find((err, appointmentList) => {
        if(err) {
            return console.error(err);
        }
        else {
            res.json({success: true, patientList: patientList, user: req.user});
        }
    });
}*/

module.exports.displayAddPage = (req, res, next) => {
    /*let patientsNumber= contactModel.find({}, 'patientNumber', function(err, patientsNumber){
        if(err){ return next(err);}
        else{
            res.render('appointments/index', {
                title: 'Add appointments',
                //patientsNumber: patientsNumber,
                displayName: req.user ? req.user.displayName : ""
            });
        }
    });*/
   res.json({success: true, msg: 'Successfully Displayed Add Page'});

    //return patientsNumber;
}

module.exports.processAddPage = (req, res, next) => {
    //let displayName= req.user ? req.user.displayName : "";

    let newAppointment = appointmentModel({
        "patientNumber": req.body.patientNumber,
        "username": req.user.displayName,
        "date": req.body.date,
        "time": req.body.time,
        "updatedOn": new Date(Date.now())
    });
    appointmentModel.create(newAppointment, (err, appointmentModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            //console.log(newAppointment.patientNumber);
            //console.log(newAppointment.date);
            //console.log(newAppointment.time);
            res.json({success: true, msg: 'Successfully Displayed Add Page'});
        }
    });
}

module.exports.displayAppointments = (req, res, next) => {
    console.log("inside display node");
    //let displayName= req.user ? req.user.displayName : "";
    appointmentModel.find((err, appointmentsList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(contactList);

           res.json({success: true, appointments: appointmentsList, user: req.user});

            
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
            res.json({success: true, msg: 'Successfully Displayed Patient to Edit', appointment: editAppointment});

        }
    });
}
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let editAppointment = appointmentModel({
        "_id": id,
        "date": req.body.date,
        "time": req.body.time
    });
    
    appointmentModel.update({_id: id}, editAppointment, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Displayed Add Page', appointment: editAppointment});

            // refresh the contact list
            //res.redirect('/appointment/list');
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
           res.json({success: true, msg: 'Successfully Deleted Patient'});
        }
    });
}