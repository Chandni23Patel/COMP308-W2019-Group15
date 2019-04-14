let mongoose = require('mongoose');

// create a model class
let vitalsSchema = mongoose.Schema({
    heartrate: String,
    bodytemprature: String,
    bodypressure: String,
    breathingrate: String

},
{
    collection: "vitals"
});

module.exports = mongoose.model('vitals', vitalsSchema);