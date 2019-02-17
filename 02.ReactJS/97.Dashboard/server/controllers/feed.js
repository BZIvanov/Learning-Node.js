const Brand = require('../models/Brand');

module.exports = {
  createBrand: (req, res) => {
    // create a brand and return it with a message
    let year = req.body.year;
    let brand = req.body.brand;
    let nps = req.body.nps;
    let baseSize = req.body.baseSize;
    let promoters = req.body.promoters;
    let passives = req.body.passives;
    let detractors = req.body.detractors;
    Brand.create({
        year,
        brand,
        nps,
        baseSize,
        promoters,
        passives,
        detractors
      })
      .then((brand) => {
        res
          .status(201)
          .json({
            message: 'Brand created successfully.',
            brand
          })
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      })
  },
  getBrands: (req, res) => {
    // Retrieve all brands in JSON format
    Brand.find()
      .then((brands) => {
        res
          .status(200)
          .json({
            message: 'Fetched brands successfully.',
            brands
          });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }

        next(error);
      });
  }
}