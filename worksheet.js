const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map(character => character.name);
console.log(names);
//2. Get array of all heights
const heights =characters.map(character=> character.height)
console.log(heights)
//3. Get array of objects with just name and height properties
const name_and_height = characters.map(character => ({name: character.name, height: character.height,}))
console.log(name_and_height)
//4. Get array of all first names
const first_names= characters.map(character=> character.name.split(" ")[0])
console.log(first_names)

//***REDUCE***
//1. Get total mass of all characters
const total_mass = characters.reduce((acc,cur) => acc +cur.mass,0)
console.log(total_mass)
//2. Get total height of all characters
const total_height =characters.reduce((acc,cur)=> acc+cur.height,0)
console.log(total_height)
//3. Get total number of characters by eye color
const eye_color_count=characters.reduce((acc,cur)=> {
    const color= cur.eye_color;
    if (acc[color]){
        acc[color]++;
    }
    else {
        acc[color]=1;
    }
    return acc
},{})
console.log(eye_color_count)
//4. Get total number of characters in all the character names
const total_characters= characters.reduce((acc,cur)=> acc + cur.name.length ,0)
console.log(total_characters)

//***FILTER***
//1. Get characters with mass greater than 100
const greater_than_100 = characters.filter(character => character.mass >100)
console.log(greater_than_100)
//2. Get characters with height less than 200
const height_less_200 = characters.filter(character => character.height<200)
console.log(height_less_200)
//3. Get all male characters
const get_males= characters.filter(character=> character.gender=="male")
console.log(get_males)
//4. Get all female characters
const get_females= characters.filter(character=> character.gender=="female")
console.log(get_females)

//***SORT***
//1. Sort by mass
const sort_by_mass = characters.sort((a,b) => b.mass -a.mass)
console.log(sort_by_mass)
//2. Sort by height
const sort_by_height= characters.sort((a,b) => b.height- a.height)
console.log(sort_by_height)
//3. Sort by name
const sort_by_name= characters.sort((a,b)=>{
    if (a.name<b.name) return -1;
    return 1
})
console.log(sort_by_name)
//4. Sort by gender
const sort_by_gender =characters.sort((a,b) => {
    if (a.gender === "female") return 1;
    return -1
})
console.log(sort_by_gender)

//***EVERY***
//1. Does every character have blue eyes?
const blue_eyes =characters.every(character => character.eye_color==="blue")
console.log(blue_eyes)
//2. Does every character have mass more than 40?
const mass_more_40 =characters.every(character => character.mass>40)
console.log(mass_more_40)
//3. Is every character shorter than 200?
const shorter_than_200 =characters.every(character => character.height<200)
console.log(shorter_than_200)
//4. Is every character male?
const every_male = characters.every(character=> character.gender ==="male")
console.log(every_male)

//***SOME***
//1. Is there at least one male character?
const one_male =characters.some(character => character.gender==="male")
console.log(one_male)
//2. Is there at least one character with blue eyes?
const one_blue_eyes = characters.some(character => character.eye_color==="blue")
console.log(one_blue_eyes)
//3. Is there at least one character taller than 210?
const taller_210 =characters.some(character => character.height>210)
console.log(taller_210)
//4. Is there at least one character that has mass less than 50?
const less_50 = characters.some(character=> character.mass<50)
console.log(less_50)
