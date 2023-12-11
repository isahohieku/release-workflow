require('dotenv').config();
const say = require('cowsay').say;

const text = 'Congratulations! This app is superb.'

console.log(say({ text, build_number: process.env.APP_BUILD }));