'use strict'

function generateGreeting(){
    let firstName = getFirstName(); 
    let message = timeOfDay(); 
    return document.write('Hello ' + firstName + ', ' + message + '!');
}

function getFirstName(){
    let firstName = prompt('Welcome! My name is Carlos. You are?'); 
    return firstName;
}

function timeOfDay(){
    let time = prompt('Just a sec. Do you have the time? (0-24)');
    let message = '';
    if(time <= 12){
        message = "Little early for a drink. Hey, I won't judge...";
    } else if(time <= 19){
        message = "Good Afternoon. Pull up a chair, what's on your mind?";
    } else if(time <= 24){
        message = "It's a great night. What'll it be?";
    } else{
        message = 'Good Day!!';
    }
    return message;
}

function getBeerPicture1(){
    let answer = prompt ('Pick 1, 2, or 3');
    let image = '';
    if(answer == 1){
        image = '<img class="tap1" src="https://touringplans.com/blog/wp-content/uploads/2014/12/duff1_glover.jpg">'
    } else if(answer == 2) {
        image = '<img class="tap2" src="https://blenderartists.org/uploads/default/original/4X/b/c/b/bcb196bd2a33ca06be49d22803674afb702242c7.jpg">'
    }
      else if(answer == 3) {
        image = '<img class="tap3" src="https://cdn.shopify.com/s/files/1/0030/6633/1203/products/AlamoBeer.Poster_360x.jpg?v=1575655170">'
      }
      else {
        image = '<img id="hero" alt="The Bartop" src="https://images.squarespace-cdn.com/content/v1/5c03fb5829711416c65642a7/1557493696080-IHRP8O6HXQFCLUS7KLW6/bender.png">'
    }
    return document.write(image);
}
