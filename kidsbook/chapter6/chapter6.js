// let name = "Nicholas";
// console.log("Hello " + name);

// if (name.length > 7) {
// console.log("Wow, you have a REALLY long name!");
// }


// let lemonChicken = false;
// let beefWithBlackBean = false;
// let sweetAndSourPork = false;
// if (lemonChicken) {
// console.log("Great! I'm having lemon chicken!");
// } else if (beefWithBlackBean) {
// console.log("I'm having the beef.");
// } else if (sweetAndSourPork) {
// console.log("OK, I'll have the pork.");
// } else {
// console.log("Well, I guess I'll have rice then.");
// }


// let sheepCounted = 0;
// while (sheepCounted < 10) {
// console.log("I have counted " + sheepCounted + " sheep!");
// sheepCounted++;
// }
// console.log("Zzzzzzzzzzz");



// for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//     console.log("I have counted " + sheepCounted + " sheep!");
//     }
//     console.log("Zzzzzzzzzzz");


// let name = "Nick";
// for (let i = 0; i < name.length; i++) {
// console.log("My name contains the letter " + name[i] + ".");
// }

//try it out: pg96

let name = "Desire";
if (name === "Desire") 
{
    console.log("Hello me!");
} 
else
{
    console.log("Hello stranger!")
}


// let Desire = true;
// let Mom = true;
// let Dad = true;

// if (Desire) 
// {
//     console.log("Hello me!");
// } 

// else
// if (Mom) 
// {
//     console.log("Hi mom");
// }
// else
// if (Dad) 
// {
// console.log("Hi Dad");    
// }
// else
// {
//     console.log("Hello stranger!")
// }



//Try it out: pg102

// let maxNumber = 10000;
// let counter = 3;
// while (counter < maxNumber)
// {
//  console.log(counter);
//  counter = counter + 3;   
// }


//Challenge 1

let animals = ["Cat", "Fish","Lemur", "Komodo Dragon"];
for (let index = 0; index < animals.length; index++) 
{
    console.log("Awesome " + animals[index]);
    
}

//Challenge3
let input = "Javascript is awesome";
let output = "";

for (let index = 0; index < input.length; index++) 
{
    if (input[index]=== "a") 
    {
        output = output + "4";
    }
    else
    if (input[index]=== "e") 
    {
        output = output + "3";
    }
    else
    if (input[index]=== "i") 
    {
        output = output + 1;
    }
    else
    if (input[index]=== "o") 
    {
        output = output + 0;
    }
    else
    {
        output = output + input[index];
    }

    
    
}

console.log(output);