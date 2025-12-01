require('dotenv').config();
const say = require('cowsay').say;

const text = 'Congratulations! This app is seem to work correctly.'

console.log(say({ text }));