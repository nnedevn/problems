// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

var flipAndInvertImage = function(image) {

  image.forEach(row => {
    // invert
    for (let i = 0; i < row.length / 2; i++) {
      let temp = row[i];
      row[i] = row[row.length - 1 - i];
      row[row.length - 1 - i] = temp;
    }
    //flip
    for (let j = 0; j < row.length; j++) {
      switch (row[j]) {
        case 1:
          row[j] = 0;
          break;
        case 0:
          row[j] = 1;
          break;
      }
    }
  });
  return image;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));

