const llamaNamer = function () {
  const possibleNames = 
  ["Larry", 
  "Leon", 
  "Leona", 
  "Les", 
  "Laura", 
  "Lemony", 
  "Lars", 
  "Lekisha"]

  const namer = function () {
      const randomizer = Math.floor(Math.random() * 7)
      const suffix = " the Llama"
      const name = possibleNames[randomizer]
      return name + suffix;
  }

  return namer
}

nameMaker = llamaNamer()
console.log(nameMaker())
