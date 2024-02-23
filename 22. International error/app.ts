//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.
function createfrut(name: string, color: string, taste: string) {
    return{
        name,
        color,
        taste,
    };

}
//create an array of fruits
const fruits = [
    createfrut("Apple", "Red", "Sweet"),
    createfrut("Orange", "Orange", "Sweet"),
    createfrut("Pineapple", "Orange", "Sweet"),
    createfrut("Peach", "Orange", "Sweet"),


];

//acess an invalid index

const invalidindex = 10; //there are only 4 elements in the array so this will cause an error
console.log(`fruit at index ${invalidindex}:`, fruits [invalidindex]);
//print the fruit 
fruits.forEach((fruit =>  {
    console.log(`name: ${fruit.name}, ${fruit.color}, ${fruit.taste}`);
    }));
    