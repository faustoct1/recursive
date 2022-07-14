const LIMIT = 5

const recursive = (array) => {
   if(array.length>=LIMIT) return array
   array.push(array.length)
   return recursive(array)
}

(async = () => {
  console.log( recursive([]) )
})()
