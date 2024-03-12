"use strict";
//Task # 01
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_lists = void 0;
console.log("Hello world");
//Task # 02
var authorName = "Eric";
console.log("Hello ".concat(authorName, ", would you like to learn some Python today?"));
//Task # 03
// lower case   
var yourName = "Syed Usaid Hussaini";
console.log("lower case:", yourName.toLowerCase());
// upper case
console.log("upper case:", yourName.toUpperCase());
// tittle case
console.log("tittle case:", yourName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
//Task # 04
console.log("Bill gates once said,\"Success is a lousey teacher it seduces smart people into thinking they can't lose.\"");
//Task # 05
var quote = "Success is a lousey teacher it seduces smart people into thinking they can't lose.";
var famous_Person = "Bill Gates";
var message = "".concat(famous_Person, " once said, \"").concat(quote, "\"");
console.log(message);
//Task # 06
var myName = "\n\t Syed Usaid\t\n";
console.log(myName);
var stripped = myName.trim();
console.log(stripped);
//Task # 07 + 08
var add = 1 + 7;
console.log(add);
var sub = 93 - 8;
console.log(sub);
var multiply = 1 * 8;
console.log(multiply);
var divide = 96 / 12;
//Task # 09
var commonNumber = 77;
console.log("My favorite number is: ".concat(commonNumber));
//Task # 10
// Task no 10
// My name is Syed Usaid Hussaini
// Dated : 20-02-2024
// This code is simple run like Hello world
console.log('Hello World this is me syed usaid');
//Task # 11
var members = ['williamson', 'smith', 'root', 'kholi'];
for (var i = 0; i < members.length; i++) {
    console.log(members[i]);
}
//Task # 12
var teamMembers = ['starc', 'boult', 'bumrah', 'shaheen'];
var strategyMessage = 'Aaj kiski zaada achi performance thi :';
for (var i = 0; i < teamMembers.length; i++) {
    console.log(strategyMessage + teamMembers[i]);
}
//Task # 13
var transportation = ['suzuki', 'power plus', 'bionic'];
for (var i = 0; i < transportation.length; i++) {
    console.log('I wanted to own a  ' + transportation[i]);
}
//Task # 14
var guest_lists = ['Shaheen', 'Babar', 'Amir'];
exports.guest_lists = guest_lists;
for (var i = 0; i < guest_lists.length; i++) {
    console.log('Welcome Sir' + guest_lists[i] + ',\nWe invite you on dinner tomorrow.\n\nThanks You.');
}
//Task # 15
var guests_list = ['Sheehan', 'Babar', 'Humayon Saeed'];
for (var i = 0; i < guests_list.length; i++) {
    console.log('Welcome Sir ' + guests_list[i] + ',\nWe are invite you on dinner tomorrow.\n\nThanks');
}
var not_present = 'Shaheen';
var new_guest = 'Virat Kohli';
guests_list[0] = new_guest;
for (var i = 0; i < guests_list.length; i++) {
    console.log('Welcome Sir ' + guests_list[i] + ',\nWe are invited you on dinner tomorrow.\n\nThanks.');
}
console.log("Mr ".concat(not_present, " will not coming tomorrow dinner."));
