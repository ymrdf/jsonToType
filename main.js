const fs = require("fs");
const obToString = require("./src/obToString.js");
const args = require("./src/args.js");

const { name, input, output } = args;

fs.readFile(input, function(err, data) {
  if (err) throw err;
  const ob = JSON.parse(data.toString());
  const result = obToString(name, ob);
  fs.writeFile(output, result, function(err) {
    if (err) throw err;
    console.log("写入完成");
  });
});
