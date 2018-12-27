const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    // note that SchemaTypes and Schema.Types is the same
    name: { type: mongoose.SchemaTypes.String, required: true },
    // note that in default property we only provide function, do not call it
    creationDate: { type: mongoose.Schema.Types.Date, required: true, default: Date.now },
    // images will be an array of id's
    images: [ { type: mongoose.Schema.Types.ObjectId } ]
});

// we will create in our database Collection named Tag and the columns in the table will be the properties from the schema
module.exports = mongoose.model('Tag', tagSchema);