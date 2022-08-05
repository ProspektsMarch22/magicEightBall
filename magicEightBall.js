//PUT YOUR NAME IN THIS FOLLOWING CONST
const userName = '';
let name = userName || 'Anon';
console.log(`Hello, ${name}!`);

//PUT YOUR QUESTION IN THIS FOLLOWING CONST
const userQuestion = 'Am i getting a job?';
let question = userQuestion || 'a secret question!';
console.log(`${name} asks: ${question}`);

let randomNumber = Math.floor(Math.random() * 8) + 1;

switch (randomNumber) {
  case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
    console.log('Reply hazy try again');
    break;
  case 4:
    console.log('Cannot predict now');
    break;
  case 5:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not so good');
    break;
  case 8:
    console.log('Signs point to yes');
    break;
}
