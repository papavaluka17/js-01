const array1 = [ 'red', 'blue', 'black'] ;
console.log(array1.includes('black'))
console.log(array1.includes('darkblue'))
// includes მეთოდით შესაძლებელია განისაზღვროს არსებობს თუ არა რომელიმე ერეიში რაღაც გარკვეული მნიშვნელიბა
// თუ არსებობს დაგვიბრუნებს true ს და თუ არა false-ს


const country = [ 'Georgia', 'Ukraine', 'USA', 'India', 'Germany']
console.log(country.lastIndexOf('Georgia'))
console.log(country.lastIndexOf('Germany'))
console.log(country.lastIndexOf('India'))
console.log(country.lastIndexOf('Argentina'))

// lastIndexOf მეთოდით შესაძლებელია იმ ინდექსის დაბრუნება რომელიც ერეიში არის მოცემული 
// და თუ ელემენტი არ იძებნება ერეიში მაშინ დაგვიბრუნებს -1 ს


const animal1 = [ 'dog', 'cat', 'cow']
const animal2 = [ 'goat', 'sheep', 'horse']
const animal3 = animal1.concat(animal2)
console.log(animal3)

// concat მეთოდით შესაძლებელია ორი ან მეტი ერეის გაერთიანება 