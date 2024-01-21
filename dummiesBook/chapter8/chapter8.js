console.log(typeof(8));
let doTheMath = 7 + 8 + 36 + 18 + 12;
console.log(typeof(doTheMath));
console.log(typeof "the cat's favorite toy");
console.log(typeof automobile);

let myObject = {};

let dreamCar = {
    make: "DMV",
    model: "23",
    color: "blue",
    year: 2023,
    bodyStyle: "Luxury Car",
    price: 22500
};

alert("The type of dreamCar is: " + typeof dreamCar);


document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.
color;
document.getElementById("body").innerHTML = dreamCar.make + " " +
dreamCar.model;
