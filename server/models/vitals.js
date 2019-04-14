let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    heartrate: String,
    bodytemprature: String,
    bodypressure: String,
    breathingrate: Number
},
{
    collection: "vitals"
});

module.exports = mongoose.model('vitals', vitalsSchema);