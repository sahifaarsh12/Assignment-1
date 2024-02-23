"use strict";
let guest_list = ['Kelvin', 'can', 'Stefan', 'John'];
exports.guest_list = guest_list;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');
}
let absent_guest = 'Kelvin';
let new_guest = 'Mike';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');
}
console.log('Mr. ${absent_guest} Is not coming tothe party.');
