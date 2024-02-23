"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const magiciannames = ["Harry Houdini", "David Blaine", "Uri Geller", "Chris Angel\n"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const graetmagicians = magicians.map(magician => `The Great ${magician}`);
    return graetmagicians;
}
//Modify the array to add "the graet" to each magicians name
const graetmagiciansname = make_great(magiciannames);
// call the function to show the great magicians name
console.log('Great Magicians:');
show_magicians(graetmagiciansname);
