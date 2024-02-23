"use strict";
let guest_list = ['Kelvin', 'can', 'Stefan', 'John'];
//for(let i=0 ; i<guest_list.length; i++){
// console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');}
let absent_guest = 'Kelvin';
let new_guest = 'Mike';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');
}
console.log(`Mr. ${absent_guest} Is not coming tothe party.`);
console.log('Good News! we found a big table so we are inviting 3 more guests.');
guest_list.unshift('Noah');
guest_list.splice(2, 0, 'Henry');
guest_list.push('Jack');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');
}
