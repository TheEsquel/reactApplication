'use strict';

// let myUser = require('./user');

// myUser('Anna' , 'anna@gmail.com' ,  '8 800 123');

// exports.myUser = myUser; 

import average from './user'
import $ from 'jquery'

let getRandomNumbers = (length, max) => 
    {
        let randomNumbers = []
        for (let i = 0; i < length ; i++)
            {
                randomNumbers.push(Math.floor(Math.random() * max))
            }
        return randomNumbers    
    }
let randomNumbers = getRandomNumbers(10000, 100)

console.log('These are some random numbers: ' + randomNumbers);
// console.log(`randomNumbers is a ${typeof randomNumbers}`)
// console.log(`average is a ${typeof average}`)
console.log('and  this is the average for them is ' + average(randomNumbers))

$('.sum').text('These are some random numbers: '  + randomNumbers)
$('.average').text('and the average for them is: ' + average(randomNumbers))