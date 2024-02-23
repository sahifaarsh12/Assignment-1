//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.


//empty array
const emptyusersNames: string[]=[];

//Non empty users array

let userNames: string[]=["admin","Herry","Alexender","Jack","Noah"]

//functional case

function greetusers(usernames:string[]):void{
    if (usernames.length===0){
        console.log('we need to find some users!')
    }

    for(const userName of usernames){
        if(userName.toLowerCase() === 'admin') {
            console.log(`Hello admin,would you like to see a status report?.`);

        }
        else{
            console.log(`Hello ${userName},Thankyou for logging in again.`)
        }
    
    }   
}
console.log('for non empty username:\n')
greetusers(userNames);

userNames = []
console.log('\n\nfor empty username.')
greetusers(emptyusersNames);
