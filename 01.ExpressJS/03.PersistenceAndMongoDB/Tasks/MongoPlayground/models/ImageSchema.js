const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    // note that SchemaTypes and Schema.Types is the same
    url: { type: mongoose.SchemaTypes.String, required: true },
    // note that in default property we only provide function, do not call it
    creationDate: { type: mongoose.Schema.Types.Date, required: true, default: Date.now },
    description: { type: mongoose.SchemaTypes.String },
    // images will be an array of id's
    tags: [ { type: mongoose.Schema.Types.ObjectId } ]
});

// we will create in our database Collection named Image and the columns in the table will be the properties from the schema
module.exports = mongoose.model('Image', imageSchema);