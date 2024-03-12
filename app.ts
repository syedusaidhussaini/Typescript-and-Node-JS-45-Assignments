//Task # 01

console.log("Hello world");

//Task # 02

let authorName: string = "Eric";
console.log(`Hello ${authorName}, would you like to learn some Python today?`)

//Task # 03

// lower case   
let yourName: string = "Syed Usaid Hussaini"
console.log("lower case:", yourName.toLowerCase());

// upper case
console.log("upper case:", yourName.toUpperCase());

// tittle case
console.log("tittle case:", yourName.replace(/\bw/g,c => c.toUpperCase()));

//Task # 04

console.log("Bill gates once said,\"Success is a lousey teacher it seduces smart people into thinking they can't lose.\"");

//Task # 05

let quote:string = "Success is a lousey teacher it seduces smart people into thinking they can't lose.";
let famous_Person = "Bill Gates";

let message= `${famous_Person} once said, "${quote}"`;

console.log(message);


//Task # 06

let myName:string =`\n\t Syed Usaid\t\n`;
console.log(myName);

let stripped:string = myName.trim();
console.log(stripped);


//Task # 07 + 08

let add:number =1+7;
console.log(add);

let sub:number =93-8;
console.log(sub);

let multiply:number =1*8;
console.log(multiply);

let divide:number =96/12;


//Task # 09

let commonNumber:number = 77;
console.log(`My favorite number is: ${commonNumber}`);

//Task # 10

// Task no 10
// My name is Syed Usaid Hussaini
// Dated : 20-02-2024
// This code is simple run like Hello world

console.log('Hello World this is me syed usaid');

//Task # 11

let members:string[] =['williamson','smith','root','kholi'];
for(let i=0; i<members.length; i++){
    console.log(members[i]);
}


//Task # 12

let teamMembers:string[] =['starc','boult','bumrah','shaheen'];
let strategyMessage:string ='Aaj kiski zaada achi performance thi :';
for(let i=0; i<teamMembers.length; i++){
    console.log(strategyMessage + teamMembers[i]);
}

//Task # 13

let transportation:string [] = ['suzuki','power plus','bionic'];
for(let i=0; i<transportation.length; i++){
    console.log('I wanted to own a  ' + transportation[i]);
}

//Task # 14

let guest_lists :string [] = ['Shaheen','Babar','Amir'];
for(let i=0; i<guest_lists.length; i++){
    console.log('Welcome Sir' + guest_lists[i] + ',\nWe invite you on dinner tomorrow.\n\nThanks You.')
}
export{guest_lists}

//Task # 15

let guests_list:string [] = ['Sheehan','Babar','Humayon Saeed'];
for(let i=0; i<guests_list.length; i++){
    console.log('Welcome Sir ' + guests_list[i] + ',\nWe are invite you on dinner tomorrow.\n\nThanks')
}
let not_present:string = 'Shaheen';

let new_guest:string = 'Virat Kohli';

guests_list[0] = new_guest;

for(let i=0; i<guests_list.length; i++){
    console.log('Welcome Sir ' + guests_list[i] + ',\nWe are invited you on dinner tomorrow.\n\nThanks.')
} 

console.log(`Mr ${not_present} will not coming tomorrow dinner.`)

//Task # 16

let guests_list :string [] = ['Virat','Babar','Warner'];
// for(let i=0; i<guests_list.length; i++){
//     console.log('Respected Sir ' + guests_list[i] + ',\nWe are invite you tomorrow dinner.\nThanks\n')
// }
let not_present : string ='Babar';
let new_guest : string = 'Finch';

guests_list[1] = new_guest;
for(let i=0; i<guests_list.length; i++){
    console.log('Respected Sir ' + guests_list[i] + ',\nWe are invite you tomorrow dinner.\nThanks\n')
}
guests_list.unshift('Shaheen','Rizwan','Malik');
for(let i=0; i<guests_list.length; i++){
    console.log('Respected Sir ' + guests_list[i] + ',\nWe are invite you tomorrow dinner. we found a big table so we decide to invite more guests\nThanks\n')
}

//Task # 17

let guests_list :string [] = ['Virat','Babar','Warner'];
// for(let i=0; i<guests_list.length; i++){
//     console.log('Respected Sir ' + guests_list[i] + ',\nWe are invite you tomorrow dinner.\nThanks\n')
// }
let not_present : string ='Babar';
let new_guest : string = 'Finch';

guests_list[1] = new_guest;
// for(let i=0; i<guests_list.length; i++){
//     console.log('Respected Sir ' + guests_list[i] + ',\nWe are invite you tomorrow dinner.\nThanks\n')
// }
guests_list.unshift('Shaheen','Rizwan','Malik');
// for(let i=0; i<guests_list.length; i++){
//     console.log('Respected Sir ' + guests_list[i] + ',\nWe are invite you tomorrow dinner. we found a big table so we decide to invite more guests\nThanks\n')
// }
console.log('Unfortunately we cannot arrange a new table , only two guests allow.')
while(guests_list.length>2){
    let remove_guest = guests_list.pop();
    console.log(`Sorry Sir. ${remove_guest} you are not invited for dinner.`);
}
for(let i=0; i<guests_list.length; i++){
     console.log('Respected Sir ' + guests_list[i] + ',\nYes you are still invited for dinner\nThanks\n')
 } 
 guests_list.splice(0,2);
 console.log(guests_list);


 //Task # 18


 //Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order
let places: string [] = ['Islamabad','Karachi','Lahore','Peshawar'];
console.log('Original :' + places);

//• Print your array in alphabetical order without modifying the actual list.
console.log('copy :' + [...places].sort());

//• Show that your array is still in its original order by printing it.
console.log('Original :' + places);

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy :' + [...places].sort().reverse());

//• Show that your array is still in its original order by printing it again.
console.log('copy :' + [...places].sort().reverse());

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log('Original :' + places.sort());

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Original :' + places.sort().reverse());    


//Task # 19


import { guest_lists } from '../Task 14/app'
console.log(`n\ PRINTING NUMBER OF GUEST INVITED `)
console.log(`We had finally invited ${guest_lists.length} from excercise 14 `)

//Task # 20

let languages: string [] = ['English','Urdu','Hindi','French'];
console.log("List of languages:")
for(let top of languages){
    console.log(top)
}

//Task # 21

interface item {
    name: string
    price: number
}
// create two objects
const book: item ={
    name: 'Life',
    price:1500
}
const Fruit: item ={
    name:'Apple',
    price :200
}
console.log(`book name: ${book.name}, price: $${book.price}`);
console.log(`apple name: ${Fruit.name}, price: $${Fruit.price}`);

//Task # 22

let array: (string | number | boolean) [] = ['munro','hales',3,true,5,'azam'];
console.log(array[1]);
console.log(array[5]);
console.log(array[2]);
console.log(array[4]);
console.log(array[3]);

//Task # 23

let car = 'civic';

console.log("is car == 'civic'? predict true")
console.log(car == 'civic')

console.log("is car !='corolla'? predict true")
console.log(car !='corolla')

console.log("is car == 'civic'? predict false")
console.log(car == 'civic')

console.log("is car == 'CIVIC? predict false")
console.log(car == 'CIVIC')

console.log("is car.length == 5? predict true")
console.log(car.length == 5);

console.log("is car.length !== 12? predict true")
console.log(car.length !== 12);

console.log("is 55 > 54 ? predict false")
console.log(55 > 54);

console.log("is 34<= 9 ? predict false")
console.log(34 <= 9);

console.log("is 1<= 11 ? predict false")
console.log(1 <= 11);

console.log("is car == 'civic' && car.length == 5? predict true ")
console.log(car == 'ciivic' && car.length ==5)

//Task # 24

// Task 24. More Conditional Tests:You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one
// False result for each of the following:

// • Tests for equality and inequality with strings

let student_name_1: string = "Usaid"
let student_name_2: string = "Syed Usaid"
let student_name_3: string = "Syed Usaid Hussaini"

 if (student_name_1 == student_name_3){
     console.log("names are equal")
 } else {
     console.log("names are not equal")
 }

 if (student_name_1 != student_name_2){
     console.log("names are equal")
 } else {
     console.log("names are not equal")
 }

let age_1 : number = 10
let age_2 : number = 20
 if (age_1 == 10){
     console.log("eligble for vote")
 }

 if (age_2 == 20){
     console.log("eligible for vote in older category");
 }

 if (age_2 != 10){
     console.log("eligible for vote")
 }

 if (age_1 <= age_2){
     console.log("Younger")
 }

 if (age_2 >= age_1){
     console.log("Older")
 }

 if(age_1 == 10 && age_2 == 20){
     console.log("person is available for voting")
}

 if(age_1 == 10 || age_2 != 20){
     console.log("person is available for not voting")
 }

let country: string [] = ['india','pakistan','china']
 if (country.includes ("china")){
     console.log("china is in country list")
 }

if (!country.includes ("america")){
    console.log("america is in not in list") 
}

//Task # 25

let myColor: string = "Green"
if (myColor == "Green"){
    console.log("You are 50$")
}

if (myColor != "Blue"){
    console.log("No output")
}

//Task # 26

let alien_colour: string = "Yellow"

if(alien_colour == "Yellow"){
    console.log("Players just earn 5 points for shooting the alien")
} else{
    console.log("Players just earn 5 points")
}

 if(alien_colour == "red"){
     console.log("Players just earn 5 points for shooting the alien")
 } else{
     console.log("Players just earn 5 points")
 }

 //Task 27

 let net_colour: string = "Brown"

 if (net_colour == "Black"){
    console.log(5)
 } else if (net_colour == "Blue"){
    console.log(10)
 } else {
    console.log(23)
 }

 //Task # 28

 let age:number = 15

if (age < 3 ){
    console.log("you are a baby")
} else if (age < 5){
    console.log("You are a teen")
} else if (age < 10){
    console.log("You ara a toddler")
} else if (age < 20){
    console.log("You are a adult")
} else {
    console.log("You are older than us")
}

//Task # 29

let lucky_fruits: string [] = ["mango","banana","orange"]

if (lucky_fruits.includes("mango")){
    console.log("mango")
}

if (lucky_fruits.includes("peach")){
    console.log("You really like bananas")
}

if (lucky_fruits.includes("banana")){
    console.log("banana")
}

if (lucky_fruits.includes("cherry")){
    console.log("You really like bananas")
}

if (lucky_fruits.includes("orange")){
    console.log("orange")
}

//Task 30

let users: string [] = ["admin","hr","account","security"]

for(let user of users){
    if (user == "admin"){
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log (`Hello ${user}, thanks you for logging in again`)
    }
}

//Task # 31


let users:string [] = ["admin","hr","acc","security"]
if (users.length ==0){
   console.log("we need to find more users!")
} else {
   for(let user of users){
       if (user== "admin"){
           console.log("Hello admin would you like to see report status?")
       }  else {
       console.log(`Hello ${user},thank you for logging in again`)
   }
}
}
users = []
if(users.length ==0){
console.log("we need to find more users")
}

//Task # 32

let current_users : string [] = ["Admin","Eric","Azam","Babar","shadab"]

let new_users: string [] = ["Ahad","farhan","Eric","Ali","Babar"]

let current_users_lower: string [] = current_users.map(user => user.toLowerCase())

for(let new_user of new_users){
    if (current_users_lower.includes (new_user.toLowerCase())){
        console.log(`sorry ${new_user}, that name has taken`)
    } else {
        console.log(`yes ${new_user}, is still in available list`)
    }
}

//Task # 33

let numbers: number [] = [1,2,3,4,5,6,7,8,9]

for(let number of numbers){

if(number==1){
    console.log(`${number}st`)
} else if(number==2){
    console.log(`${number}nd`)
} else if(number==3){
    console.log(`${number}rd`)
} else {
    console.log(`${number}th`)
}
}

//Task # 34

let favourite_pizza: string [] = ["pepproni","chicken","veg"]

// for(let pizza of favourite_pizza){
//     console.log(pizza)
// }

for(let pizza of favourite_pizza){
    console.log(`I really like ${pizza} pizza!`)
}

console.log("\nI really love pizza!")

//Task # 35

let animals:string [] = ["Cat","Lion","Cheetah"]

for(let animal of animals){
    console.log(animal)
}
console.log("\n")

for(let animal of animals){
    console.log(`A ${animal} has a long tail`)
}

console.log("\n All of these are great animals! But i love tiger")
//Task # 36

function makeShirt(size:string, text: string): void {
    console.log(`you order a ${size}shirt that say ${text}`)
}  

makeShirt('large',"i love phython")
makeShirt('medium',"i need a big shirt")

//Task # 37

function makeShirt(size:string = 'Large', text:string = 'i love phython'): void{
    console.log(`You order a ${size}, shirt that says ${text}`)
}
makeShirt();
makeShirt('medium')


//Task # 38

function describe_city(city: string, country:string ='Pakistan'): void{
    console.log(`${city}, is in ${country}`)
}

describe_city('multan');
describe_city('france', 'europe')
describe_city('lahore', 'is in punjab')


//Task # 39

function cityCountry(city:string, country: string):string {
    return `${city}, ${country}`
}

let c1 = cityCountry('lahore', 'Pakistan')
let c2 = cityCountry('tokyo','Japan')
let c3 = cityCountry('delhi', 'India')

console.log(c3)
console.log(c2)
console.log(c1)

//Task  40

function makeAlbum (artist: string, tittle: string): { artist: string; tittle: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        tittle: tittle.charAt(0).toUpperCase() + tittle.slice(1) 
    };
    return dictionaries;
} 

let album = makeAlbum("Arijit", "Shayad")
console.log(album)

album = makeAlbum("Arijit", "Saware")
console.log(album)

album = makeAlbum("Arijit", "Kheriyat")
console.log(album)

//Task # 41

function show_magicians (magicians: string []): void {
    for(const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));  
    }
}

const magician: string [] = ["Babar","Azam","Ali"]
show_magicians(magician)

//Task # 42

function show_magicians (magicians: string []): void {
    for(const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));  
    }
}


function make_great (magicians: string []): void{
    for(let i =0; i < magicians.length; i++) {
        magicians[i] = magicians[i] +  ' the great'
    }
}  


const magicians2: string [] = ["Babar","Azam","Ali"]
make_great(magicians2)
show_magicians(magicians2)


//Task # 43

// Question no 42 ki file hai:
function show_magicians (magicians: string []): void {
    for(const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));  
    }
}


function make_great(magicians: string []): void{
    for(let i =0; i < magicians.length; i++) {
        magicians[i] = magicians[i] +  ' the great'
    }
}  


const magicians2: string [] = ["Babar","Azam","Ali"]
make_great(magicians2)
show_magicians(magicians2)

//Let's Begin # Task 43

function make_great2 (magicians: string []): String[] {
    const greatMagicians: string[] = [];
    for (let i=0; i < magicians.length; i++) {
        greatMagicians.push(magicians[1] + 'The Great');
    }
    return greatMagicians;

}

const magicians3: string [] = ["Babar","Azam","Ali"];
const greatMagicians3: string[] = make_great2(magicians3);
show_magicians(magicians3);


//Task # 44

function sandwich(...items: string[]): void{
    console.log("Our hotel Menu:")
for(let i=0; i < items.length; i++){
    console.log(` + ${items[i]}`)
}
}
console.log("Enjoy your Order")



sandwich('pizza','burger','chicken')
sandwich('ink','icecream','nut')
sandwich('toffe','milk','gun')


//Task # 45


type car = {
    manufacture: string
    model: string
    [key: string]:   any;

}
function createCar (model: string,manufacture: string, optional: Record < string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}



const myCar: car = createCar( "city","civic", { color: "silver", year: "2020"});
console.log(myCar);



//All Task Completed