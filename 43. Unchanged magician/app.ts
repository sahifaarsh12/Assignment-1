//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magiciannames: string[]=["Harry Houdini","David Blaine","Uri Geller","Chris Angel\n"]

function show_magicians(magicians: string[]): void 
{
    for(const magician of magicians){
        console.log(magician)
    }
}

function make_great(magicians: string[]): string[] {
    const graetmagicians: string[] = magicians.map(magician =>`The Great ${magician}`);
    return graetmagicians
}



//Modify the array to add "the great" to each magician's name
const graetmagiciansname: string[]= make_great(magiciannames)
//call the function to show the original magicians name
console.log('Origianl Magicians')
show_magicians(magiciannames)

// call the function to show the great magicians name
console.log('Great Magicians:')
show_magicians(graetmagiciansname)

