// let ourFirstFunction = function () 
// {
//     console.log("Hello world!");
// };

// console.log(ourFirstFunction());



// let sayHelloTo = function (name) 
// {
//     console.log("Hello " + name + "!");
// };


// console.log(sayHelloTo("Nick"));


// let drawCats = function (howManyTimes) 
// {
//     for (var i = 0; i < howManyTimes; i++) 
//     {
//     console.log(i + " =^.^=");
//     }
// };

// console.log(drawCats(5))


// let printMultipleTimes = function (howManyTimes, whatToDraw) 
// {
//     for (var i = 0; i < howManyTimes; i++) 
//     {
//     console.log(i + " " + whatToDraw);
//     }
// };

// console.log(printMultipleTimes(5, "=^.^="));

// console.log(printMultipleTimes(4, "^_^"));

// console.log(printMultipleTimes(2, "(>_<)"));





// console.log(5 + Math.floor(1.2345));

// let double = function (number) 
// {
//     return number * 2;
// };

// console.log(double(3));


// console.log(double(5) + double(6));
// console.log(double(double(3)));



// let pickRandomWord = function (words) 
// {
//     return words[Math.floor(Math.random() * words.length)];
// };

// let randomWords = ["Planet", "Worm", "Flower", "Computer"];

// console.log(pickRandomWord(randomWords));
// console.log(pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]));


// let generateRandomInsult = function () 
// {
//     var randomBodyParts = ["Face", "Nose", "Hair"];
//     var randomAdjectives = ["Smelly", "Boring", "Stupid"];
//     var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
   
//     // Join all the random strings into a sentence:
//     var randomString = "Your " + pickRandomWord(randomBodyParts) +
//     " is like a " + pickRandomWord(randomAdjectives) + 
//     " " + pickRandomWord(randomWords) + "!!!";
//     return randomString;
// };

// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());


// var fifthLetter = function (name) 
// {
//     if (name.length < 5) 
//     {
//         return;
//     }
//     return "The fifth letter of your name is " + name[4] + ".";
// };

// console.log(fifthLetter("Nicholas"));


// //Challenge 1

// function add(num1,num2)
// {
//     return num1+num2;
// }

// function multiply(num1,num2)
// {
//     return num1*num2;
// }

// console.log(add(multiply(36325,9824),777));


function areArraysSame(arr1, arr2)
{
    let counter = 0;
    let ans = false;

    if(arr1.length === arr2.length)
    {
        
    
        while(counter < arr1.length)
        {
            if (arr1[counter] === arr2[counter]) 
            {
                counter++;
                ans= true;

            } 
            else 
            {
                ans = false
            }
        }
    }
    
    else
    {
        ans = false
    }

    return ans
}

console.log(areArraysSame([1,2,3],[4,5,6]));