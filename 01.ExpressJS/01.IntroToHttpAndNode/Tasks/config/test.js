let pros = require('./database')

console.log(pros.products.add("Kifla"))
console.log(pros.products.add("Kroasan"))
console.log(pros.products.add("Marcipan"))

console.log(pros.products.getAll())

console.log(pros.products.findByName('Kifl'))