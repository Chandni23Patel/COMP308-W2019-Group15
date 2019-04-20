/* 
    Student ID: 300984573
    Health Care Application
    Description: CRUD operation for Medicine
*/

let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let medicineModel = require('../models/medicine');

module.exports.displayMedicineList = (req, res, next) =>{
    medicineModel.find((err, medicineList) => {
        if(err) {
            return console.error(err);
        }
        else {
            res.json({success: true, medicineList: medicineList, user: req.user});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
   res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {

    let newMedicine = medicineModel({
        "medicineName": req.body.medicineName,
        "type": req.body.type,
        "description": req.body.description
    });

    medicineModel.create(newMedicine, (err, medicineModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Medicine'});
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    medicineModel.findById(id, (err, medicineObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed Medicine to Edit', medicine: medicineObject});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedMedicine = medicineModel({
        "_id": id,
        "medicineName": req.body.medicineName,
        "type": req.body.type,
        "description": req.body.description
    });

    medicineModel.update({_id: id}, updatedMedicine, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Edited Medicine', medicine: updatedMedicine});
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    medicineModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
           res.json({success: true, msg: 'Successfully Deleted Medicine'});
        }
    });
}

