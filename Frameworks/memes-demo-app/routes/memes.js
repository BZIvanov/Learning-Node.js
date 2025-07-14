const fs = require("node:fs");
const url = require("node:url");
const qs = require("node:querystring");
const path = require("node:path");
const shortid = require("shortid");
const router = require("express").Router();

const memeService = require("../services/meme");
const genreService = require("../services/genre");
const memeTemplates = require("../templates/memeTemplates");
const uiTemplates = require("../templates/uiTemplates");

const placeholder = '<div id="replaceMe">{{replaceMe}}</div>';

const getHome = (req, res) => {
  fs.readFile("./views/home.html", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(data);
  });
};

const viewAll = (req, res) => {
  memeService.getAll().then((data) => {
    data = data
      .sort((a, b) => b.dateStamp - a.dateStamp)
      .filter((meme) => meme.privacy === "on");

    let responseString = "";
    for (const meme of data) {
      responseString += memeTemplates.viewAll(meme._id, meme.memeSrc);
    }

    fs.readFile("./views/viewAll.html", (err, html) => {
      if (err) {
        console.log(err);
        return;
      }
      html = html.toString().replace(placeholder, responseString);

      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(html);
    });
  });
};

const viewAddMeme = (req, res, status = null) => {
  fs.readFile("./views/addMeme.html", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    genreService.getAll().then((genres) => {
      let exitString = "";

      for (const genre of genres) {
        exitString += memeTemplates.genreOption(genre.id, genre.title);
      }

      if (status === "err") {
        data = data.toString().replace(placeholder, uiTemplates.errorMessage());
      }
      if (status === "suc") {
        data = data
          .toString()
          .replace(placeholder, uiTemplates.successMessage());
      }

      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(
        data
          .toString()
          .replace('<div id="replaceMe2">{{replaceMe2}}</div>', exitString)
      );
    });
  });
};

const getDetails = (req, res) => {
  const targetId = qs.parse(url.parse(req.url).query).id;

  memeService
    .get(targetId)
    .then((targetedMeme) => {
      let replaceString = memeTemplates.details(
        targetedMeme.memeSrc,
        targetedMeme.title,
        targetedMeme.description,
        targetId
      );

      fs.readFile("./views/details.html", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        data = data.toString().replace(placeholder, replaceString);

        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.end(data);
      });
    })
    .catch(() => {
      res.end("Meme does not exist in database!");
    });
};

const addMeme = (req, res) => {
  const fileName = shortid.generate() + ".jpg";
  const fields = req.body;
  const files = req.files;

  memeService.getAll().then((allMemes) => {
    const dirName = `/public/memeStorage/${Math.ceil(allMemes.length / 10)}`;
    const relativeFilePath = dirName + "/" + fileName;
    const absoluteDirPath = path.join(__dirname, `../${dirName}`);
    const absoluteFilePath = absoluteDirPath + "/" + fileName;

    fs.access(absoluteDirPath, (err) => {
      if (err) {
        fs.mkdirSync(absoluteDirPath);
      }

      files.meme.mv(absoluteFilePath, (err) => {
        if (err) {
          console.log(err);
          viewAddMeme(req, res, "err");
          return;
        }

        let formIsInvalid = false;

        for (const field in fields) {
          if (fields[field] === "") {
            formIsInvalid = true;
          }
        }

        if (formIsInvalid) {
          viewAddMeme(req, res, "err");
        } else {
          const memeForImport = {
            title: fields.memeTitle,
            memeSrc: relativeFilePath,
            description: fields.memeDescription,
            privacy: fields.status,
            dateStamp: Date.now(),
            genreId: fields.genreSelect,
          };

          memeService
            .create(memeForImport)
            .then(() => {
              viewAddMeme(req, res, "suc");
            })
            .catch(() => {
              viewAddMeme(req, res, "err");
            });
        }
      });
    });
  });
};

const getSearchMeme = (req, res) => {
  genreService.getAll().then((genres) => {
    fs.readFile("./views/searchMeme.html", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      let exitString = '<option value="all">all</option>';

      for (let genre of genres) {
        exitString += `<option value="${genre.title}">${genre.title}</option>`;
      }

      data = data.toString().replace(placeholder, exitString);

      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    });
  });
};

const searchForMeme = (req, res) => {
  const params = req.query;
  const title = params.memeTitle;
  const selectedGenre = params.genreSelect;

  let sorted = [];

  genreService.getAll().then((tags) => {
    memeService.getAll().then((memes) => {
      if (selectedGenre !== "all") {
        const demo = tags.find((x) => {
          return x.id == selectedGenre;
        });
        const arrSelection = demo.memeArr;

        for (let meme of memes) {
          if (arrSelection.indexOf(meme.id) !== -1) {
            sorted.push(meme);
          }
        }
      } else {
        sorted = memes;
      }

      if (title !== "") {
        sorted = sorted.filter((elem) => {
          if (elem.title.indexOf(title) !== -1) {
            return elem;
          }
        });
      }
      sorted = sorted
        .sort((a, b) => {
          return b.dateStamp - a.dateStamp;
        })
        .filter((meme) => {
          return meme.privacy === "on";
        });

      let responseString = "";
      for (let meme of sorted) {
        responseString += `<div class="meme">
					<a href="/getDetails?id=${meme.id}">
					<img class="memePoster" src="${meme.memeSrc}"/>          
					</div>`;
      }

      fs.readFile("./views/viewAll.html", (err, html) => {
        if (err) {
          console.log(err);
          return;
        }
        html = html.toString().replace(placeholder, responseString);

        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.end(html);
      });
    });
  });
};

const createGenreView = (req, res) => {
  fs.readFile("./views/addGenre.html", (err, data) => {
    if (err) {
      console.log(err);
    }

    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(data);
  });
};

const deleteMeme = (req, res) => {
  const memeId = req.params.id;
  memeService
    .delete(memeId)
    .then(() => {
      res.json({ location: "/viewAllMemes" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ err: err });
    });
};

router
  .get("/", getHome)
  .get("/viewAllMemes", viewAll)
  .get("/addMeme", viewAddMeme)
  .post("/addMeme", addMeme)
  .get("/getDetails", getDetails)
  .get("/searchMeme", getSearchMeme)
  .get("/sSearchMeme", searchForMeme)
  .get("/addGenre", createGenreView)
  .delete("/delete/:id", deleteMeme);

module.exports = router;
