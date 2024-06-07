//

let ToDoItem = document.getElementById("UserInput")
let UserInput = document.getElementById("Inputter")
let Eraser = document.getElementById("erase")
let ThaDate = document.getElementById("ToDate")
let CurrentDate = new Date;
ThaDate.innerHTML = CurrentDate.toDateString();
let Content = document.getElementById("ToDoList")
let Items = JSON.parse(localStorage.getItem("Items")) ? JSON.parse(localStorage.getItem("Items")) : localStorage.setItem("Items", JSON.stringify(
    
    [
         
 ]) )




 function AddItem() {

    UserInput.style.display = "flex";
console.log("This is a message");
// Eraser.style.display = "flex";

}

function Confirm() {
console.log(typeof Items)
    console.log("You've added an item")
    
let NewItem = {


id: Items.length + 1,
Name: ToDoItem.value,
CreatedDate: new Date(),
completed:false

};
Items.push(NewItem)

console.log(Items)
document.getElementById("ToDoItem").innerHTML = NewItem.Name;
function ShowItems() {

    let ToDoSize = Items.length
    // let StuffToDo = Items
    Items.forEach(item => {
    
        Content.innerHTML += `
        <li id="ToDoItem">${item.Name}<button type="button" id="erase" onclick="Delete()"><img src="https://richtershotline.github.io/Pimages/Images/eraser.png" id="Deleter"></button></li>`
    
    })
    }
     ShowItems()
}

