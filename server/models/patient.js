let mongoose = require('mongoose');

// create a model class
let patientSchema = mongoose.Schema({
    patientNumber: String,
    firstName: String,
    lastName: String,
    age: Number,
    allergies: String,
    height: String,
    weight: String,
    addedOn: String,
    password: String

},
{
    collection: "patients"
});

module.exports = mongoose.model('patient', patientSchema);