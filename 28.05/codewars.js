// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//     For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
//     Happy Coding!

const squareDigits=(num)=>parseInt(num.toString().split('').map(element=>element*element).join(''));
console.log(squareDigits(9119));

// Code as fast as you can! You need to double the integer and return it.

const doubleInteger=(i)=>i*2;
doubleInteger(2);

// Clock shows h hours, m minutes and s seconds after midnight.
//     Your task is to write a function which returns the time since midnight in milliseconds.

const past=(h, m, s)=>((((h*60)+m)*60)+s)*1000;
console.log(past(0,1,1));

// Very simple, given an integer or a floating-point number, find its opposite.

const opposite=(number)=>-number;
console.log(opposite(10));

// Nathan loves cycling.
//     Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//     You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

const litres=(time)=>Math.floor(time/2);
console.log(litres(1.95));


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum=(numbers)=>numbers.reduce((acc,current)=>{
    return acc+=current*current
},0);
console.log(squareSum([1, 2, 2]));

// Create a function which answers the question "Are you playing banjo?".
//     If your name starts with the letter "R" or lower case "r", you are playing banjo!
//     The function takes a name as its only argument, and returns one of the following strings:
//     name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if(name.startsWith('r') || name.startsWith('R')){
        return `${name} plays banjo`;
    }else{
        return `${name} does not play banjo`;
    }
}
console.log(areYouPlayingBanjo('Roman'));

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//     The output should be two capital letters with a dot separating them.
//     It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

const abbrevName=name=>name.split(' ').map(element=>element.charAt(0)).join('.').toUpperCase();
console.log(abbrevName('Nazarii pastukh'));

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded
// with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets
// he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific
// given number of dragons, will he survive?
//     Return true if yes, false otherwise :)

const hero=(bullets, dragons)=> {
    return bullets >= dragons * 2;
}
console.log(hero(2,1));

// Implement a function which convert the given boolean value into its string representation.
//     Note: Only valid inputs will be given.

const booleanToString=(b)=>b.toString();
console.log(booleanToString(true));


let  x  = !"" + false;
console.log(typeof x);
console.log('---------');


let str = "       Applied mathematics     ";

let trimmedStr = str.trim();

let duplicatedStr = trimmedStr.repeat(2);

console.log(duplicatedStr);

console.log('---------');

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
        return accumulator + currentValue * 2;
    } else {
        return accumulator + currentValue * 3;
    }
}, 0);

console.log(sum);

console.log('---------');


const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const createMonthObjects = (months) => {
    return months.map((month) => ({
        [month]: `${month.length} letters`
    }));
};

const result = createMonthObjects(monthsArray);

console.log(result);