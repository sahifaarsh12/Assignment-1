//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const make_shirt = (size: string, message: string)
:void=>
{
    console.log(`size: ${size}, Message: '${message}'`)

}

//call the function
//call the function with size and message variables

let size: string='Medium'
let message='Learning Typescript'

make_shirt(size,message)

//direct call the function

make_shirt('Large' , 'I like typescript')