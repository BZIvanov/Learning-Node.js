// import file system module and save it in variable called fs
const fs = require('fs')


// *** writeFileSync ***
/*
This method  will create new file. The first parameter will be the name and path of the new created file and second parameter is what data to be filled in the new file. This method is synchronous.
*/
let person = { name: "Iva", age: 27 };
fs.writeFileSync('./data.json', JSON.stringify(person));


// *** readFileSync ***
/*
This method will read a file. The first parameter is the file we want to read and the second parameter is the type of encoding. This method is synchronous.
*/
let text = fs.readFileSync('./package.json', 'utf8');
console.log(text);


// *** readFile ***
/*
This method is asynchronous and the result will be sent to the call back function, in the call back function the first parameter is the error if any occurs and the second is the response if successfull. First parameter is the name of the new file and path where to be created and second parameter is data which will be filled in the new file.
*/
let batman = { name: "Batman", strength: 178 };
fs.writeFile('./superhero.json', JSON.stringify(batman), function(err, res) {
    console.log('done');
});


