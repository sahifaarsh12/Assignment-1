"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are largeby default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = ' Large', message = 'I love Typescript.') {
    console.log(`Size:${size}, Message: ${message} `);
}
//large shirt with default message
make_shirt();
//Medium shirt with default message
make_shirt(' Medium', 'Learning Typescript.');
//Small shirt with message
make_shirt(' Small', 'Hello, Typescript!');
