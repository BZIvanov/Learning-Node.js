const mongoose = require('mongoose');

// this is our schema which works as validation on data we receive and specify what columns of data we will have. Properties in the schema object are columns in database
let chocolateSchema = new mongoose.Schema({
  brand: { type: mongoose.Schema.Types.String, required: true, minlength: 3, unique: true },
  ingredient: { type: mongoose.Schema.Types.Number, required: true, min:5, max: 15 },
  color: { type: mongoose.Schema.Types.String }
});
// here we tell that how our Collection in database will be called, in this example is Chocolate
let Chocolate = mongoose.model('Chocolate', chocolateSchema);

// this schema has third property eat which will be of type as another schema. Which means for eat property we need to provide records from the Chocolate collection
let consumerSchema = new mongoose.Schema({
  firstName: { type: mongoose.Schema.Types.String, required: true },
  lastName: { type: mongoose.Schema.Types.String, required: true },
  eat: [Chocolate.schema]
});
let Consumer = mongoose.model('Consumer', consumerSchema);

// this is our connection string. After the port number is the name of how our database will be called, in this example is called "sweets". If sweets database is not existing it will be created, otherwise just used
mongoose.connect('mongodb://localhost:27017/sweets')
  .then(() => {
    // this will be how one record should look like
    let mmmhm = new Chocolate({
      brand: "Svoge",
      ingredient: 5,
      color: 'dark'
    });

    // save method will save our record to the database
    mmmhm.save();
  }).then(() => {
    // for the Consumer model to provide for the eat property data from Chocolate model we need to first access Chocolate model and then add them. Note that name of the properties have to be the same as they are in the model because they are the columns in the database
    Chocolate.find({}).then(chocs => {
      let lover = new Consumer({
        firstName: 'Sonia',
        lastName: 'Ivanova',
        eat: chocs
      });

      lover.save();
    })
  });

// chaining then doesn't work, this is just example
