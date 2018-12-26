const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

http.createServer((req, res) => {
    if(req.method === 'GET') {
        fs.readFile('./index.html', 'utf8', (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
    
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if(req.method === 'POST') {
        let form = new formidable.IncomingForm();

        // in the callback we receive error as first parameter, data from input fields and files from input fields
        form.parse(req, (err, fields, files) => {
            if(err) {
                console.log(err);
            }

            //console.log(fields);
            // fields is object where the keys are like the names from the form inputs and values are from form input values
            let myName = fields.firstName;
            let myPass = fields.password; 
            
            //console.log(files)
            // myFile comes from the name attribute from the form
            let file = files.myFile;
            // after the files are usually stored in Temp Windows folder with below rows we will move the file in our project folder
            let tempPath = file.path;
            let fileName = file.name;

            // with rename we move files from one folder to another
            fs.rename(tempPath, './files/' + fileName, (err) => {
                if(err) {
                    console.log(err);
                    return;
                }

                res.write('Thank you!');
                res.end();
            });
        })
    }
    
}).listen(1337);
