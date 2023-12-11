require('dotenv').config();
const say = require('cowsay').say;

const text = 'Congratulations! This app is superb.'

console.log(say({ text }));
console.log({ build_number: process.env.APP_BUILD })