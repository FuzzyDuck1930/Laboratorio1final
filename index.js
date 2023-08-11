const calculate = require("birthday-calculator");
const bday = new Date("2004,03,25");
const result = calculate.getDayWhenBorn(bday);
console.log(result);

const GmailList = [
    {
        email: "fufufufu@gmail.com"
},
{
    email: "littlenobody1234@gmail.com"
},
{
    email: "carmenza09@gmail.com"
}
]

let validate = require("validator")

console.log(validate.isEmail("carmenza09@gmail.com"))