"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magiciannames = ["Harry Houdini", "David Blaine", "Uri Geller", "Chris Angel"];
function show_magicians(magicians) {
    for (const items of magicians) {
        console.log(items);
    }
}
//call the function
show_magicians(magiciannames);
