const fs = require('fs')

const genders = ['M', 'F']
const maleName = ['John', 'Robert', 'Alex', 'Will', 'Piotr', 'Eugene']
const femaleName = ['Mary', 'Anna', 'Viktoria', 'Nika', 'Johanna', 'Agnieszka']
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Davis']

function randChoice(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const people = [];

for(let i = 0; i < 20; i++){
    const gender = randChoice(genders);
    const firstName = gender === 'M' ? randChoice(maleName) : randChoice(femaleName);
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const age = Math.floor(Math.random() * (78 - 18 + 1)) + 18

    const person = {gender, firstName, lastName, age}
    people.push(person)
}

const jsonDate = JSON.stringify(people, null, 2)
fs.writeFile('people.json', jsonDate, (err) => {
    if (err) {
        console.log('Error')
        throw err
    }
    console.log("Ok")
})
