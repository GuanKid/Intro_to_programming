// let dinosaurs = ["T-Rex","Velociraptor","Stegosaurus","Triceratops","Brachiosaurus","Pteranodon","Apatosaurus","Diplodocus","Compsognathus"];
// console.log(dinosaurs[0]);
// console.log(dinosaurs[3]);
// dinosaurs[0] = "Tyrannosaurus Rex";

// let dinosaurs = [];
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus";
// dinosaurs[33] = "Philosoraptor";
// console.log(dinosaurs);

// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops","stegosaurus", 3627.5], 10];
// console.log(dinosaursAndNumbers[2]);
// console.log(dinosaursAndNumbers[2][0]);

// let maniacs = ["Yakko", "Wakko", "Dot"];
// console.log(maniacs.length);
// console.log(maniacs[maniacs.length - 1]);

// var animals = [];
// animals.push("Cat");
// animals.push("Dog");
// animals.push("Llama");
// console.log(animals);
// console.log(animals.length);


// animals.unshift("Monkey");
// console.log(animals);
// animals.unshift("Polar Bear");
// console.log(animals);
// console.log(animals[0]);
// console.log(animals[2]);


// let lastAnimal = animals.pop();
// console.log(lastAnimal);
// animals.pop();
// console.log(animals);
// animals.unshift(lastAnimal);
// console.log(animals);

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
// console.log(furryAndScalyAnimals);
// console.log(furryAnimals);
// console.log(scalyAnimals);


// furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let featheredAnimals = ["Macaw", "Dodo"];
// let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
// console.log(allAnimals);


// let colors = ["red", "green", "blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("green"));
// console.log(colors.indexOf("purple"));



// var randomBodyParts = ["Face", "Nose", "Hair"];
// var randomAdjectives = ["Smelly", "Boring", "Stupid"];
// var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// var randomInsult = "Your " + randomBodyPart + " is like a " +
// randomAdjective + " " + randomWord + "!!!";
// randomInsult;

var randomBodyParts = ["Mouth","Face","Hand","Head"];
var randomAdjectives = ["Big","Round","Ugly", "Smelly"];
var randomAnimals = ["a Monkey","a Dog","a Baboon","Big foot"];
var randomAnimalBodyParts = ["Mouth", "Butt", "Paw"];

var randomBodyPart = randomBodyParts[Math.floor(math.random()*randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(math.random()*randomAdjectives.length)];
var randomAnimal = randomAnimals[Math.floor(math.random()* randomAdjectives.length)];
var randomAnimalBodyPart = randomAnimalBodyParts[math.floor(math.random() * randomAnimalBodyParts.length)];

console.log("Your " + randomBodyPart + " is more " + randomAdjective + " than " +randomAnimal + "'s " + randomAnimalBodyPart);


var numbers = [3,2,1];

var joinedNumbers = numbers.join(" is bigger than ");




