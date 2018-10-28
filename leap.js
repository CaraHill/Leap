function isLeap(year) {
  return divisibleByFourNotHundred(year) || divisibleByHundredNotFourHundred(year) || divisibleByFourHundred(year);
}

function divisibleByFourNotHundred(year) {
  return year % 4 == 0 && year % 100 != 0;
}

function divisibleByHundredNotFourHundred(year) {
  return year % 100 != 0 && divisibleByFourHundred(year);
}

function divisibleByFourHundred(year) {
  return year % 400 == 0;
}

export { isLeap }
