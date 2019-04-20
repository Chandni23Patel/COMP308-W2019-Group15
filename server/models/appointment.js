/* 
    Student ID: 300991457
    Health Care Application
    Description: Model for Appointment
*/

let mongoose = require('mongoose');

// create a model class
let appointmentSchema = mongoose.Schema({
    patientNumber: String,
    username: String,
    date: String,
    time: String,
    updatedOn: String 
},
{
    collection: "appointments"
});

module.exports = mongoose.model('appointment', appointmentSchema);