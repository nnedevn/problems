

function tickets(peopleInLine){
  debugger
  let bills = {
    "25": 0,
    "50": 0,
    "100": 0
  }

  for (person of peopleInLine) {
    if (person === 25) {
      bills['25'] ++;
    } else if (person === 50){
      if (bills['25'] >=1){
        bills['25'] --;
        bills['50'] ++;
      } else {
        return "NO";
      }
    } else if (person === 100){
      if (bills['25'] >= 1 && bills['50'] >=1){
        bills['50'] --;
        bills['25'] --;
        bills['100'] ++
      } else if (bills['25'] >=3){
        bills['25'] -= 3;
      } else {
        return "NO";
      }
    }
  }

  return "YES"
}

console.log(tickets([25, 25, 50])); // => YES 
console.log(tickets([25, 100])); // => NO. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 25, 50, 50, 100])); // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)