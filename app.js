'use strict'
let firstName = prompt('Welcome! My name is Carlos. You are?');
let time = prompt('What time is it (00-24?)');

// use age verification
// let age = prompt('Are you 21 (y/n)');
// let message = 
// if(age = y){
//     message = 'cool, come on in, but first... ';
// } else{
//     message = 'whoah, whoah, whoah. Not so fast.(do the right thing and close the)';
// }

let greeting = '';
if(time <= 12){
    greeting = "Little early for a drink. Hey, I won't judge...";
} else if(time <= 19){
    greeting = "Good Afternoon. Pull up a chair, what's on your mind?";
} else if(time <= 24){
    greeting = "It's a great night. What'll it be?";
} else{
    greeting = 'Good Day!!';
}

document.write('Hello '+ firstName + '! ' + greeting);

console.log()
