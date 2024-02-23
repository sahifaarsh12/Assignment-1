//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


//list of animals with common characteristics
const animals: string[]=["Cow","Cat","Goat"]

//printing the names of each element using a for loop

console.log('list of each animals:')
for (const animal of animals){
    console.log(animal)
}
//print statement about each animal
console.log("\n Statement about each animal:")
for (const animal of animals) {
   if (animal === 'cow') 
{ console.log(`A ${animal} is such a lovely pet.`)
    }
   else if (animal === 'cat') 
       { console.log(`A ${animal} would be a good companion at home.`)
            }
           else (animal === 'Goat') 
                { console.log(`A ${animal} is such an adorble pet that also gives us milk.`)
                    }
}
    
    //common characteristics
    console.log('\nWhat these animals have in common')
    console.log('Any of these animal would made a great pet!')

