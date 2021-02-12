// function firstDuplicate1(a) {
//   let alength = a.length;
//   let duplicates = alength + 1;
//   let itemsGoneThrough = 0;

//   for (let i = 0; i < alength; i++) {
//     for (let j = i + 1; j < alength; j++) {
//       itemsGoneThrough++
//       if (a[i] === a[j] && j - i < duplicates) {
//         duplicates = j - i;
//       }
//     }
//   }
//   console.log("Items Gone Through: ", itemsGoneThrough)
//   return duplicates !== alength + 1 ? a[duplicates] : -1;
// }

// function firstDuplicate2(a) {
//   let seenArr = new Array(a.length).fill(0)
  
//   for (index in a){
//     if(a[Math.abs(index) - 1] < 0){
//       return Math.abs(index)
//     } else {
//       seenArr[Math.abs(index) - 1] = a[(Math.abs(index) - 1)] * -1
//     }
//   }
//   console.log(seenArr)
//   return -1
// }
// // let arr = setup();
// let arr = [2, 3, 3]
// function setup() {
//   let arr = [];
//   for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor(Math.random() * 100 + 100);
//   }
//   return arr;
// }

// let t0 = new Date().getTime();
// console.log(firstDuplicate1(arr));
// let t1 = new Date().getTime();

// console.log("firstDuplicate1 executes in", t1 - t0, "ms");

// t0 = new Date().getTime();
// console.log(firstDuplicate2(arr));
// t1 = new Date().getTime();

// console.log("firstDuplicate2 executes in", t1 - t0, "ms");

function firstDuplicate(a) {
  let dupes = {};

  for (let i = 0; i < a.length; i++){
    if (dupes[a[i]] === undefined){
      dupes [a[i]] = i;
    } else {
      return a[i];
  
    }
  }
  return -1;
}

let arr = [2, 3, 3]

console.log(firstDuplicate(arr));