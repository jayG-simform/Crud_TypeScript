import { Operation } from "./Operation/Operation.js";
import { Showdata } from "./Operation/ShowData.js";

// Load data
export let ProductId = document.getElementById("product-id") as HTMLInputElement;
export let ProductName = document.getElementById("productName") as HTMLInputElement;
export let Price = document.getElementById("price") as HTMLInputElement;
export let Description = document.getElementById("description") as HTMLInputElement;
export let Category = document.getElementById("category") as HTMLInputElement;

export let errorID = document.getElementById("errorID");
export let errorName = document.getElementById("errorName");
export let errorPrice = document.getElementById("errorPrice");
export let errorDesc = document.getElementById("errorDesc");
export let errorCategory = document.getElementById("errorCategory");
export let errorImg = document.getElementById("errorImg");

export let img:any = document.getElementById("imgUser");
export let viewModal:any = document.getElementById("productFormModal");

export let btnUpdate =  document.getElementById("btupdate") as HTMLButtonElement;
export let btnAdd =  document.getElementById("btnAdd") as HTMLButtonElement;
export let types:any = document.querySelector("#productFormModal .modal-type")as HTMLInputElement;
export let titles = document.querySelector("#productFormModal .modal-title")as HTMLInputElement;

// Add data
export var oper = new Operation();
let oprt1:any = document.querySelectorAll(".operter");
for(let elements of oprt1){
    elements.addEventListener("click", function(){
        oper.operation(elements.id);
    });
}

// Display data in a table using local Storage 
export var show = new Showdata();
show.showData();

// Edit and update data
const edit:any = document.querySelectorAll(".edit");
for(let e of edit){
    e.addEventListener("click", function(){
        show.editData(e.dataset["id"]);
    });
}

// Delete data
const dlt:any = document.querySelectorAll(".delete");
for(let e of dlt){
    e.addEventListener("click",function(){
        show.deleteData(e.dataset["id"]);
    })
}

