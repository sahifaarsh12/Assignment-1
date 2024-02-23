//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest_list :string[] = ['Kelvin','can','Stefan','John'];

//for(let i=0 ; i<guest_list.length; i++){
   // console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');}

    let absent_guest :string = 'Kelvin';
    let new_guest :string = 'Mike';
    guest_list[0] = new_guest;
    //for(let i=0 ; i<guest_list.length; i++){
       // console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');}

        console.log(`Mr. ${absent_guest} Is not coming tothe party.`);
        console.log('Good News! we found a big table so we are inviting 3 more guests.')

        guest_list.unshift('Noah');
        guest_list.splice(2 , 0 , 'Henry');
        guest_list.push('Jack');

        for(let i=0 ; i<guest_list.length; i++){
            console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n');}
            console.log('\nsorry we can not arange big table,only two people will be invited.');
            while(guest_list.length > 2){
                let remove_guest = guest_list.pop()
                console.log(`sorry Mr. ${remove_guest} you are not invited for dinner`);
            }
            for(let i=0 ; i<guest_list.length; i++){
                console.log('Dear Mr. ' + guest_list[i] + ',\n\nYou are still invited.\n\nThankyou!\n\n');}
           guest_list.splice(0, 2);
           console.log(guest_list);


console.log('\n Printing message indicating number of guest')
console.log(`we have finally invited ${guest_list.length} guest in exercise 15`);