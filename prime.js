const recursive = (number, val = 3) => {
  if(number === 2) return true;
  else if(number < 2 || number % 2 === 0)  return false;
  else if(val * val > number) return true;
  else if(number % val === 0) return false;
  return recursive(number, val + 2);
}

(async = () => {
  console.log('Is prime: ', recursive(7) )
})()

