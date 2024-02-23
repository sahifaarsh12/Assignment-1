//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const car =
{
   name: "Fortuner",
   price: "19,899,000",
   description: "Automatic. The Fortuner car has a fuel average of 8 - 9 KM/L with a fuel tank capacity of 80L"

}
//Define an array of objects
let cars: Array<typeof car> = [];
//pushing multiple object
cars.push(car);
cars.push
   ({
      name: "BMW",
      price: "40,000,000",
      description: "The BMW i8 Concept plug-in hybrid electric vehicle included an electric motor located in the front axle powering the front wheels rated "
   })
let car3 = {
   name: "Lamborghini",
   price: "100000000",
   description: " It is the world's first Super Sport Utility Vehicle, in which luxury, sportiness and performance meet comfort and versatility."

}
cars.push(car3)
console.log(cars)
//Functions to Display cars
function displayCars(cars: Array<typeof car>) 
{
   for (let i of cars){
      console.log(`title: ${i.name}
      description${i.description}
      price${i.price}
      ________________\n`);

   }
}
displayCars(cars);