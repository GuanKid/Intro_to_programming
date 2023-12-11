// let cat = {};
// cat["legs"] = 3;
// cat["name"] = "Harmony";
// cat["color"] = "Tortoiseshell";

// console.log(cat);


// let cat = {};
// cat.legs = 3;
// cat.name = "Harmony";
// cat.color = "Tortoiseshell";

// console.log(cat.legs);

// let dinosaurs = [
//     { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
//     { name: "Stegosaurus", period: "Late Jurassic" },
//     { name: "Plateosaurus", period: "Triassic" }
//    ];

//    console.log(dinosaurs[0]);
//    console.log(dinosaurs[0]["name"]);
//    console.log(dinosaurs[1].period);


//    let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
//    let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
//    let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };
//    let friends = [anna, dave, kate];

//    console.log(friends[1]);
//    console.log(friends[2].name);
//    console.log(friends[0].luckyNumbers);


    let movies = {
    "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
    }
};

let findingNemo = movies["Finding Nemo"]
console.log(findingNemo.duration);
console.log(findingNemo.format)


let cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
    format: "Blu-ray"
   };
   movies["Cars"] = cars;

   console.log(Object.keys(movies));

   //Challeng 1

let players = {};
   players["Desire"]=0;
   players["Liam"]=0;
   players["Noel"]=0;
   players["Joe"]=0;
   players["Maropeng"]=0;

   players["Desire"] +=4;
   players["Maropeng"] +=3;
   players["Joe"] +=1

   console.log(players);


//Challeng2

let myCrazyObject = 
{
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};

console.log(myCrazyObject["some array"][2].number)