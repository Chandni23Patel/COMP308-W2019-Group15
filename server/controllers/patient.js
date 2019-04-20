/* 
    Student ID: 300990140
    Health Care Application
    Description: CRUD operation for Patient
*/

let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let passport = require("passport");

// create a reference to the db schema
let patientModel = require('../models/patient');
let userModel = require('../models/user');
let User = userModel.User;

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

    let today = new Date(Date.now());
    let pNo = today.getFullYear()+""+(today.getMonth()+1)+""+today.getDate()+""+req.body.firstName;

    let newPatient = patientModel({
        "patientNumber": pNo,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age,
        "allergies":req.body.allergies,
        "height":req.body.height,
        "weight":req.body.weight,
        "addedOn": new Date(Date.now()),
        "password": req.body.firstName
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

    // let eId = "eID@gmail.com";
    // // Add patient to user model for login
    // let newUser = new User({
    //     username: pNo,
    //     //password: req.body.password
    //     email: eId,
    //     displayName: req.body.firstName
    //   });
    
    //   User.register(newUser, req.body.password, (err) => {
    //     if (err) {
    //       console.log("Error: Inserting New User");
    //       if (err.name == "UserExistsError") {
    //         console.log("Error: User Already Exists!");
    //       }
    //       return res.json({success: false,  msg: 'ERROR: Failed to Register User.'});
    //     } else {
    //       return res.json({success: true, msg: 'User Registered Successfully!'});
    //     }
    //   });
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
        "allergies":req.body.allergies,
        "height":req.body.height,
        "weight":req.body.weight,
        "addedOn": new Date(Date.now()),
        "password": req.body.firstName
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

