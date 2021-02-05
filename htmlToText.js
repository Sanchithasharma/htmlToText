const { htmlToText } = require('html-to-text');

const text = htmlToText('<div>Nope Its not Ashton Kutcher. It is Kevin Malone. <p>Equally Smart and equally handsome</p></div>', {
    wordwrap: 130
});
console.log(text); // expected result: 
// Nope Its not Ashton Kutcher. It is Kevin Malone.

// Equally Smart and equally handsome
