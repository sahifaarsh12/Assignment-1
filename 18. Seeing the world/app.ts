//Seeing the World: Think of at least five places in the world you’d like to visit.
//•1 Store the locations in a array. Make sure the array is not in alphabetical order.

//•2 Print your array in its original order.

//3 Print your array in alphabetical order without modifying the actual list.

//•4 Show that your array is still in its original order by printing it.

//•5 Print your array in reverse alphabetical order without changing the order of the original list.

//•6 Show that your array is still in its original order by printing it again.

//•7 Reverse the order of your list. Print the array to show that its order has changed.

//•8 Reverse the order of your list again. Print the list to show it’s back to its original order.

 //.9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//•10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//1 create an array to store travel destination
let traveldestination = ['Australia', 'Japan', 'Iraq', 'Turkey', 'Saudia Arabia'];
//2 print your array in its original order
console.log("original order");
console.log(traveldestination);
//3 Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical order without modifying the actual list");
console.log([...traveldestination].sort());
//4 Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order by printing it");
console.log(traveldestination);
//5 Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse Alphabetical order without modifying the actual list");
console.log([...traveldestination].sort().reverse());
//6 //4 Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order by printing it");
console.log(traveldestination);
//•7 Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse order");
traveldestination.reverse()
console.log(traveldestination)
//•8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to original");
traveldestination.reverse()
console.log(traveldestination)
//.9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Change to Alphabetical order");
traveldestination.sort()
console.log(traveldestination)
//•10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n Change to Alphabetical order");
traveldestination.sort().reverse()
console.log(traveldestination)