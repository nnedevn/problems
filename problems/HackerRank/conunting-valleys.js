const conuntingValleys = function(arr){
  let valleys = 0;
  let altitude = 0;
  
  for (let step of arr){
    if (altitude === 0 && step ==='D'){
      valleys++;
    }
    
    if (step === "U"){
      altitude++;
    } else {
      altitude --;
    }
  }  
  return valleys;
}

console.log(conuntingValleys('DDUUDDUDUUUD'));