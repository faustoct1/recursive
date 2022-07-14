const recursive = (n) => {
  if(n === 1) return 1;
  return recursive(n-1) * n;
}

(async = () => {
  const n = 5
  console.log(`Fatorial of ${n}:`, recursive(n) )
})()

