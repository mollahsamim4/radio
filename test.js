const person = [
    { name: "Samim", age: 20, village: "Daharaknda" },
    { name: "Azanur", age: 125, village: "Bithari" },
    { name: "Tapos", age: 30, villagel: "Gunarajpur" }
]
const totalAge = person.reduce((total, person) => {

    total += person.age
    return total
}, 0)
console.log(totalAge)
