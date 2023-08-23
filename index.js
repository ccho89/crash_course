/* 1. Imagine you have a number. Lets say 5. How can you tell whether this number is odd? */
const number = 5;
console.log(number % 2 === 1);

/* 2. If the number is odd, lets just console.log('Num is odd!'). How would you do that? */
const number = 5;
if (number % 2 === 1) {
console.log('Num is odd!');
}

/* 3. Imagine you have a bag of colors. Lets say you have the colors 'red', 'blue', 'green', 'orange', 'yellow'. How can you store all these colors in your code? */

const colors = ['red', 'blue', 'green', 'orange', 'yellow'];

/* 4. We have stored all the colors in our code inside a variable. How can you access the 0th element? What about the 1st element? What about the 2nd element? Lets just console.log it one by one */
console.log(colors[0]); // red
console.log(colors[1]); // blue
console.log(colors[2]); // green

/* 5. How can you look through every single color one by one? */
const colors = ['red', 'blue', 'green', 'orange', 'yellow'];
for(let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/* 6. For each of the colors that you have stored, how many colors are longer than 3 characters? */
/* This shows all the colors over 3 characters: 
const colors = ['red', 'blue', 'green', 'orange', 'yellow'];

let colorsOverThreeCharacters = colors.filter(colors => colors.length > 3);
console.log(colorsOverThreeCharacters); */

const colors = ['red', 'blue', 'green', 'orange', 'yellow'];
  let count = 0;
for (let i = 0; i < colors.length; i++) {
  if (colors[i] > 3, count++);
}
console.log(count);
  
const colors = ['red', 'blue', 'green', 'orange', 'yellow'];
  let count = 0;
for (let i = 0; i < colors.length; i++) {
  if (colors[i] > 3)
    count++;
}
console.log(count);

let numberOfColorsThatAreLongerThanThree = 0;
const colors = ['red', 'blue', 'green', 'orange', 'yellow'];
function numberOfColorsThatAreLongerThanThree () {
if (color.length > 3) {
  numberOfColorsThatAreLongerThanThree++;
};

/* 7. You have a bottle of alcohol. This bottle of alcohol has a few properties

    The bottle name: casamigos
    The spirit: tequila
    The alcohol percentage: 40%
    Number of shots until blackout: 20

Without storing these properties into individual variables like this, how can you store this information in your code? */

const liquor = {
  name: 'casamigos',
  spirit: 'tequila',
  percentage: 0.4,
  shotsUntilBlackout: 20,
};

/* 8. Nice! You stored the information in your code. How can you programmatically access the name, spirit, percentage, and shotsUntilBlackout properties? Lets just console.log all of them */
console.log(liquor.name);
console.log(liquor.spirit);
console.log(liquor.percentage);
console.log(liquor.shotsUntilBlackout);

/* 9. If the percentage is greater than 0.3, lets console.log('This is a courtney style drink') */
const liquor = {
  name: 'casamigos',
  spirit: 'tequila',
  percentage: 0.4,
  shotsUntilBlackout: 20,
};

if(liquor.percentage > 0.3) {
  console.log('This is a courtney style drink');
}

/* 10. Remember how in the 7th problem, you only had to deal with 1 bottle? What if you have many different bottles? Lets store this information in our code. Lets store your favorite 3 bottles now. */
const liquors = [
  {name: 'casamigos', spirit: 'tequila', percentage: 0.4, shotsUntilBlackout: 20},
  {name: 'hennessey', spirit: 'cognac', percentage: 0.4, shotsUntilBlackout: 30},
  {name: 'jameson', spirit: 'whiskey', percentage: 0.25, shotsUntilBlackout: 40},
];

/* 11. How can you access the percentage property from every single bottle you have? Lets just console.log the percentage of every single bottle, one by one */
  const liquors = [
  {name: 'casamigos', spirit: 'tequila', percentage: 0.4, shotsUntilBlackout: 20},
  {name: 'hennessey', spirit: 'cognac', percentage: 0.4, shotsUntilBlackout: 30},
  {name: 'jameson', spirit: 'whiskey', percentage: 0.25, shotsUntilBlackout: 40},
];
  console.log(liquors[0].percentage);
  console.log(liquors[1].percentage);
  console.log(liquors[2].percentage);

/* 12. Find the # of bottles with percentage less than 0.3 and console.log it */
  const liquors = [
  {name: 'casamigos', spirit: 'tequila', percentage: 0.4, shotsUntilBlackout: 20},
  {name: 'hennessey', spirit: 'cognac', percentage: 0.4, shotsUntilBlackout: 30},
  {name: 'jameson', spirit: 'whiskey', percentage: 0.25, shotsUntilBlackout: 40},
];
  
  let count = 0;
  for (let i = 0; i < liquors.length; i++) {
    if (liquors[i].percentage < 0.3) count ++;
  }
  console.log(count);
  
  // OR YOU CAN DO THIS WAY:
  
  let count = 0;
  for (const obj of liquors) {
    if (obj.percentage < 0.3) count++;
  } 
  console.log(count);

/* 13. Imagine you have an array of numbers. [1, 2, 3, 4, 5]. You want to find the average of all those numbers. Write me some code that finds the average and console.logs the average */

const arr1 = [1, 2, 3, 4, 5];
let sum = 0;

arr1.forEach((number) => {
  sum += number;
});
let avg = sum / arr1.length;
console.log(avg);


/* 14. Imagine you have a second array of numbers. [4, 5, 6, 7, 1, 2]. You want to also find the average of all those numbers. Write me some code that finds the average and console.logs it */
  
  const arr2 = [4, 5, 6, 7, 1, 2];
  
  const sum = arr2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  
  const avg = sum / arr2.length;
  console.log(avg);

/* 15. Imagine you have a third array of numbers. [10, 2, 3, 4, 1, 2]. You want to also find the average of all those numbers. Write me some code that finds the average and console.logs it */
  
  const arr3 = [10, 2, 3, 4, 1, 2];
for (i = 0; i < arr3.length; i++) {
  average += arr3[i];
}
  console.log(average / arr3.length);
  
/* 16. Imagine you have a fourth array of numbers. [100, 12, 1, 3, 4]. You want to also find the average of all those numbers. Write me some code that finds the average and console.logs it */
  
  const arr4 = [100, 12, 1, 3, 4];
  
  const sum = arr4.reduce((a, b) => a + b, 0);
  const average = (sum / arr4.length);
  
  console.log(`${average}`);

/* 17. Imagine you have a fifth array of numbers. [1, 100, 2, 19, 3]. You want to also find the average of all those numbers. Write me some code that finds the average and console.logs it */
  
  const arr5 = [1, 100, 2, 19, 3];
  
 let sum = 0;

arr5.forEach((number) => {
  sum += number;
});
let avg = sum / arr5.length;
console.log(avg);