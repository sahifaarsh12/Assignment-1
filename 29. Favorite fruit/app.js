"use strict";
//favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//Make array Of fruits
const favoritefruits = ["Strawberries", "Guava", "Kiwi"];
//check for specific food using independent if statement
if (favoritefruits.includes('Strawberries')) {
    console.log('I insanely like strawberries');
}
if (favoritefruits.includes('Guava')) {
    console.log('I like Guava very much');
}
if (favoritefruits.includes('Kiwi')) {
    console.log('I enjoy kiwies');
}
if (favoritefruits.includes('Blueberrie')) {
    console.log('Blueberries are tasty');
}
if (favoritefruits.includes('Apricot')) {
    console.log('I love Apricots');
}
