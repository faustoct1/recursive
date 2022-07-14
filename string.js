const STRING = "hello world\n"

const recursive = (string) => {
   if(string.length>=STRING.length) return string
   string = string.concat(STRING[string.length])
   return recursive(string)
//   return string
}

(async = () => {
  console.log( recursive('') )
})()
