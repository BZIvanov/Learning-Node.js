// this is our custom object holding some basic information about our application. The use of this is to keep all these settings here at one place
module.exports = {
   development: {
       port: 1337,
       // in this case our collection in the database will be called booklibrary
       db: 'mongodb://localhost:27017/booklibrary'
   }
};