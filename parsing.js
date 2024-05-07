"use strict";

// let name = "Ayushi Khare";

// let spc = name.indexOf(" ");
// let first_name = name.substring(0, spc);
// let last_name = name.substring(spc+1);

// console.log("Name: " + name)
// console.log("First Name: " + first_name);
// console.log("Last Name: " + last_name);


function parseAndDisplayName(name){
    let spc = name.indexOf(" ");
    let first_name = name.substring(0, spc);
    let last_name = name.substring(spc+1);

    console.log("Name: " + name)
    console.log("First Name: " + first_name);
    console.log("Last Name: " + last_name);

}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
