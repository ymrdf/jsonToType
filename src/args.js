const program = require("commander");

program
  .version("0.0.1")
  .usage("[options] <file ...>")
  .option("-r, --root <n>", "string, interface name, default 'root'")
  .option("-i, --input <n>", "string, input file name, default 'input.json'")
  .option("-o, --output <n>", "string, output file name, default 'output.ts'")
  .parse(process.argv);

let name = "root";
let input = "input.json";
let output = "output.ts";

if (program.root) {
  name = program.root;
}
if (program.input) {
  input = program.input;
}
if (program.output) {
  output = program.output;
}

module.exports = { name, input, output };
