//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


//define array of favorite pizza

const favoritepizzas=["Mushroom","Bulgoti","Buffalo Chicken"]

//print the name of each pizza using a for loop

console.log('My favorite pizzas are:')

for (let i = 0; i < favoritepizzas.length; i++){
    console.log(favoritepizzas[i])
}

//Print sentence for each piiza

console.log('\nI like these pizzas')
for (let i = 0; i < favoritepizzas.length; i++){
    console.log("I like " + favoritepizzas[i] +   " pizza.")
}

//Print additional sentence about how much i like pizza

console.log('\nI really love Pizzas.')