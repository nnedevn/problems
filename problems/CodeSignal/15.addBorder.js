function addBorder(picture) {
  picture.unshift(generateStarStr(picture[0].length + 2));
  picture.push(generateStarStr(picture[0].length));

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*" + picture[i] + "*";
  }

  return picture;
}

function generateStarStr(length) {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += "*";
  }
  return str;
}

let matrix = ["abc", "def"];

console.table(addBorder(matrix));
