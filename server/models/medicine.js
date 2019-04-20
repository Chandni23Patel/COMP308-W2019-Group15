/* 
    Student ID: 300984573
    Health Care Application
    Description: Model for Medicine
*/

let mongoose = require('mongoose');

// create a model class
let medicineSchema = mongoose.Schema({
    medicineName: String,
    type: String,
    description: String
},
{
    collection: "medicines"
});

module.exports = mongoose.model('medicine', medicineSchema);