// const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

// with promises
fileOps();

// without promises....
/* 
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data); // it wil give data as BUFFER data if utf-8 is not defined
    //   console.log(data.toString()); // we can get data in readable form.. or we can define encoding
  }
); */

/* // write a new file
fs.writeFile(
  path.join(__dirname, "files", "starterr.txt"),
  "This is written here.",
  (err) => {
    if (err) throw err;
    console.log("Wite complete");

    // append to starterr file
    fs.appendFile(
      path.join(__dirname, "files", "starterr.txt"),
      "\n This is added.",
      (err) => {
        if (err) throw err;
        console.log("Append complete");
      }
    );
  }
); */

/* 
//append the file
fs.appendFile(
  path.join(__dirname, "files", "text.txt"),
  "This is ting.",
  (err) => {
    if (err) throw err;
    console.log("Append complete");
  }
); */

// catch an uncaught exception
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
