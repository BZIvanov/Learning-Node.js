const fs = require('node:fs');
const path = require('node:path');
const { parse } = require('csv-parse');

const availableEmployees = [];

fs.createReadStream(path.join(__dirname, 'employees.csv'))
  .pipe(
    parse({
      comment: '#', // this is in case we have comments in file which are not part of the table
      columns: true, // this will make the value os objects with key:value pairs instead of arrays with just the values
    })
  )
  .on('data', (employee) => {
    if (employee.available === 'TRUE') {
      availableEmployees.push(employee);
    }
  })
  .on('error', (err) => {
    console.log(err);
  })
  .on('end', () => {
    console.log(availableEmployees);
    console.log('Operation completed');
  });
