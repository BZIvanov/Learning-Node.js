const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: { type: mongoose.SchemaTypes.String, required: true },
    // creationDate is from date type and if no parameter is supplied the default has to be a function, keep in mind we provide the function without calling it
    creationDate: { type: mongoose.SchemaTypes.Date, required: true, default: Date.now },
    // images is an array and type of data it has is ObjectId
    images: [{ type: mongoose.SchemaTypes.ObjectId }]
});

// our schema has to be assigned to the mongoose model to be able to use it. First parameter is string specifing how our schema will be called and the second parameter is the schema itself. Tag (first parameter) will be the name of the column in the database
module.exports = mongoose.model('Tag', tagSchema);