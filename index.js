// Code your solutions in this file
//const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, events) {
    let message = [];
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return message;
  }

function countDown() {
    countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
  } 