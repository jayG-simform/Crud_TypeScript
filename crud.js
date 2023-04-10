import { Operation } from "./Operation/Operation.js";
import { Showdata } from "./Operation/ShowData.js";
// Load data
export let ProductId = document.getElementById("product-id");
export let ProductName = document.getElementById("productName");
export let Price = document.getElementById("price");
export let Description = document.getElementById("description");
export let Category = document.getElementById("category");
export let img = document.getElementById("imgUser");
export let viewModal = document.getElementById("productFormModal");
export let btnUpdate = document.getElementById("btupdate");
export let btnAdd = document.getElementById("btnAdd");
export let types = document.querySelector("#productFormModal .modal-type");
export let titles = document.querySelector("#productFormModal .modal-title");
// Add data
export var oper = new Operation();
let oprt1 = document.querySelectorAll(".operter");
for (let elements of oprt1) {
    elements.addEventListener("click", function () {
        oper.operation(elements.id);
    });
}
// Display data in a table using local Storage 
export var show = new Showdata();
show.showData();
// Edit and update data
const edit = document.querySelectorAll(".edit");
for (let e of edit) {
    e.addEventListener("click", function () {
        show.editData(e.dataset["id"]);
    });
}
// Delete data
const dlt = document.querySelectorAll(".delete");
for (let e of dlt) {
    e.addEventListener("click", function () {
        show.deleteData(e.dataset["id"]);
    });
}
