const fs = require("node:fs");
const path = require("node:path");

const database = require("../db");

module.exports = (req, res) => {
  const baseURL = `http://${req.headers.host}`;
  // we will add pathname property to the req object
  req.pathname = req.pathname || new URL(req.url, baseURL).pathname;

  if (req.pathname === "/" && req.method === "GET") {
    // __dirname is a global variable which is the path to the module. Console.log it anywhere to see example
    const filePath = path.join(__dirname, "..", "views", "home.html");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          // content type for internet search use mime types
          "Content-Type": "text/plain",
        });

        return res.end("404 not found");
      }

      const parsedUrl = new URL(req.url, baseURL);
      const queryData = Object.fromEntries(parsedUrl.searchParams);

      let products = database.products.getAll();
      if (queryData.query) {
        products = products.filter((product) => {
          return product.name
            .toLowerCase()
            .includes(queryData.query.toLowerCase());
        });
      }

      let content = "";
      for (const product of products) {
        content += `<div class="product-card">
                    <img class="product-img" src="${product.image}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                </div>`;
      }

      const html = data.toString().replace("{content}", content);

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.write(html);
      res.end();

      return true;
    });
  } else {
    return false;
  }
};
