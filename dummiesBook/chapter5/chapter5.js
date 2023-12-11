let item1,item2,item3;
document.getElementById("changeList").onclick = newList;
function newList() {
    
    item1 = prompt("Enter a new first thing:");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
}

function updateList() {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;

}