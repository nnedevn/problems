function changeCalc(amount) {
  let quarter = 25;
  let dime = 10;
  let nickel = 5;
  let penny = 1;

  if (amount % quarter < amount) {
    console.log((amount - (amount % quarter)) / quarter, "Quarters");
    amount = amount % quarter;
  }
  if (amount % dime < amount) {
    console.log((amount - (amount % dime)) / dime, "Dimes");
    amount = amount % dime;
  }
  if (amount % nickel < amount) {
    console.log((amount - (amount % nickel)) / nickel, "Nickels");
    amount = amount % nickel;
  }
  if (amount % penny < amount) {
    console.log((amount - (amount % penny)) / penny, "Pennys");
    amount = amount % penny;
  }
}

console.log(changeCalc(97));
