"use strict";
let guest_list = ['Kelvin', 'can', 'Stefan', 'John'];
//for(let i=0 ; i<guest_list.length; i++){
// console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');}
let absent_guest = 'Kelvin';
let new_guest = 'Mike';
guest_list[0] = new_guest;
//for(let i=0 ; i<guest_list.length; i++){
// console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');}
console.log(`Mr. ${absent_guest} Is not coming tothe party.`);
console.log('Good News! we found a big table so we are inviting 3 more guests.');
//yahan pr meny 3 guest add kiye hain
guest_list.unshift('Noah');
guest_list.splice(2, 0, 'Henry');
guest_list.push('Jack');

//yahan pr meny 6 guest k array ko print krwaya h
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');
}
//sorry msg to guest for not inviting them
console.log('\nsorry we can not arange big table,only two people will be invited.');
//yahan meny guest remove kiye hain
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry Mr. ${remove_guest} you are not invited for dinner`);
}
//hamary bachy hoe 2 invited guest
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nYou are still invited.\n\nThankyou!\n\n');
}
//meny sary guest array se remove krdiye
guest_list.splice(0, 2);
console.log(guest_list);
