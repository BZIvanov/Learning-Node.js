const fs = require("node:fs");
const path = require("node:path");
// querystring module will collect data from stream. For example from form submition we will get object where the properties will be from the input name attribute
const qs = require("node:querystring");

const database = require("../db");

module.exports = (req, res) => {
  const baseURL = `http://${req.headers.host}`;
  req.pathname = req.pathname || new URL(req.url, baseURL).pathname;

  if (req.pathname === "/product/add" && req.method === "GET") {
    const filePath = path.join(__dirname, "..", "views", "products-add.html");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
      }

      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
      res.end();

      return true;
    });
  } else if (req.pathname === "/product/add" && req.method === "POST") {
    let dataString = "";

    req.on("data", (data) => {
      dataString += data;
    });

    req.on("end", () => {
      const product = qs.parse(dataString);
      database.products.add(product);

      res.writeHead(302, {
        Location: "/",
      });
      res.end();

      return true;
    });
  } else {
    return false;
  }
};
