const fs = require('node:fs');
const path = require('node:path');
const { parse } = require('csv-parse');

const CSV_COLUMNS = ['ruby', 'python', 'vuejs', 'angular', 'react', 'nodejs'];

const getData = (name) =>
  new Promise((resolve, reject) => {
    const fileLocation = path.join(__dirname, `${name}technologies.csv`);

    if (!fs.existsSync(fileLocation)) {
      reject(new Error(`File ${fileLocation} is missing.`));
    }

    const csvParser = parse({
      delimiter: ',',
    });

    const csvFileStream = fs.createReadStream(fileLocation);

    csvFileStream.on('ready', () => {
      csvFileStream.pipe(csvParser);
    });

    csvFileStream.on('error', (error) => {
      reject(new Error('CSV file stream error', { cause: error }));
    });

    csvParser.on('error', (error) => {
      reject(new Error('CSV parser stream error', { cause: error }));
    });

    const cards = [];

    csvParser.on('readable', () => {
      let record;

      while ((record = csvParser.read())) {
        const card = {};

        if (record.length !== CSV_COLUMNS.length) {
          console.warn('Column mismatch', record);
        }

        record.forEach((value, index) => {
          card[CSV_COLUMNS[index]] = value;
        });

        cards.push(card);
      }
    });

    csvParser.on('end', () => {
      cards.shift();

      resolve(cards);
    });
  });

module.exports = getData;
