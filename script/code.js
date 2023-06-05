const add = document.querySelector("#add")
const sort = document.querySelector("#sort")
const inputName = document.querySelector("#input")
let list = document.getElementById('list')
let array = []

function addItem() {
    array.push(inputName.value);
    list.innerHTML = "";
    array.forEach((item) => {
        list.innerHTML += `
        <div><input id="checkbox" type="checkbox">`+item+`<button id="delete">&times</button></div>
        `
    })
}