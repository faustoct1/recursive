const LIMIT = 5

const recursive = (stop) => {
   if(stop>=LIMIT) return stop
   console.log(stop)
   return recursive(++stop)
}

(async = () => {
  recursive(0)
})()
