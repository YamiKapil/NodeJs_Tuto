// for large file...

const fs = require("fs");

const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf-8" });

const ws = fs.createWriteStream("./files/new-lorem.txt");

/* 
rs.on("data", (dataChumk) => {
  ws.write(dataChumk);
});
 */

// instead of ws.write we can do this...
rs.pipe(ws);
