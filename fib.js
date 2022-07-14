const recursive = (n) => {
  if(n < 2) return n;
  return recursive(n-1) + recursive(n - 2);
}

(async = () => {
  const n = 10
  console.log(`Fibonacci sequence of ${4}:`, recursive(n) )
})()

