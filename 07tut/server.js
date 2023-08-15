const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const PORT = process.env.PORT || 3500;

// custom logger middleware...
// app.use((req, res, next) => {
//   logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");
//   console.log(`${req.method} ${req.path}`);
//   next();
// });
/// now we can just use
app.use(logger);

/// cors stands for Cross Origin Resource Sharing..
const whitelist = [
  "https://www.mysite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
];
const corsOptions = {
  orgin: (origin, callback) => {
    if (whitelist.indexOf(origin) != -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by Cors"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// build in middleware to handle urlendoed data
// inother words, form data:
// 'content-type: application/x-www-form-urlencoded'
// used for the formData..
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, "/public")));

app.get("^/$|/index(.html)?", (req, res) => {
  //   res.send("Hello World!");
  /// sending the file...
  //   res.sendFile("./views/index.html", { root: __dirname });
  /// another way to serve a file is by joining the paths...
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); //302 by default by express..
});

// Route handlers
// chaining function....
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("attempted to log the hello world");
    next();
  },
  (req, res) => {
    res.send("Hello World!!");
  }
);

// chaining function Second way....
const one = (req, res, next) => {
  console.log("one");
  next();
};
const two = (req, res, next) => {
  console.log("two");
  next();
};
const three = (req, res, next) => {
  console.log("three");
  next();
};
const four = (req, res) => {
  console.log("Finished!!");
  res.send("Finished!!");
};
app.get("/chain(.html)?", [one, two, three, four]);

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
