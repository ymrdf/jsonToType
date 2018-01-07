const obToString = (name, ob) => {
  let string = "interface " + name + "{\n";
  const childInterface = [];

  for (const i in ob) {
    const item = ob[i];
    if (typeof item === "object") {
      if (item === null) {
        string += "  " + i + ":any;\n";
      } else if (item instanceof Array) {
        if (item.length === 0) {
          string += "  " + i + ": any[];\n";
        } else if (typeof item[0] !== "object") {
          string += "  " + i + ": " + typeof item[0] + "[];\n";
        } else {
          string += "  " + i + ": " + i + "[];\n";
          childInterface.push(obToString(i, item[0]));
        }
      } else if (item instanceof Object) {
        string += "  " + i + ": " + i + ";\n";
        childInterface.push(obToString(i, item));
      }
    } else if (typeof item === "string") {
      string += "  " + i + ": string;\n";
    } else if (typeof item === "number") {
      string += "  " + i + ": number;\n";
    } else if (typeof item === "boolean") {
      string += "  " + i + ": boolean;\n";
    }
  }

  string += "}\n";

  childInterface.forEach(item => {
    string += item;
    string += "\n";
  });

  return string;
};

module.exports = obToString;
