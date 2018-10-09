// 'use strict' 

// module.exports = function(name, email,  phone) {
//     console.log(`Имя  ${name},  email  ${email},  телефон  ${phone}`);

// };

function sum (numbers)
    {
        let sum = 0
        numbers.forEach(element => {
            sum+= element
        });
        return sum;
    }
function average(numbers)
    {
        return sum(numbers) / numbers.length;
    }   
     
export default average;    