// Iteration 1: Names and Input
//1.1
const hacker1 = "Artur";
//1.2
console.log(hacker1);
//1.3
const hacker2 = "Pedro";
//1.4
console.log(hacker2);

// Iteration 2: Conditionals
//2.1
if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`${hacker2} has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`${hacker1} and ${hacker2} has the same long names, both of them with ${hacker1.length} characters.`);
}

// Iteration 3: Loops
//3.1
for (let i=0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}

//3.2
for (let i = hacker2.length-1; i >= 0; i--) {
    console.log(hacker2[i]);
}

//3.3 
/*
if (hacker1 > hacker2) {
    console.log(`${hacker1} goes first.`);
} else if (hacker1 < hacker2) {
    console.log(`Yo, ${hacker2} goes first.`);
} else {
    console.log('What?! You both have the same name?');
}
*/
//OR
if (hacker1.localeCompare(hacker2) > 0) {
    console.log(`${hacker2} goes first.`);
} else if (hacker2.localeCompare(hacker1) > 0 ) {
    console.log(`Yo, ${hacker1} goes first.`);
} else {
    console.log('What?! You both have the same name?');
}