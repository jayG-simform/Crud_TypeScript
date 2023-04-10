import { viewModal, ProductId, ProductName, Price, Category, Description, img, btnUpdate, btnAdd, titles, types } from "../crud.js";
var showProduct;
export class Showdata {
    showData() {
        if (localStorage.getItem('ProductTS') == null) {
            console.log(localStorage.getItem("ProductTS"));
            showProduct = [];
        }
        else {
            showProduct = JSON.parse(localStorage.getItem("ProductTS"));
        }
        var table = "";
        showProduct.forEach(function (element, index) {
            table += `<tr index=${index}>`;
            table += `<td>${element.ProductID}</td>`;
            table += `<td>${element.Productname}</td>`;
            table += `<td>${element.Price}</td>`;
            table += `<td>${element.Categorys}</td>`;
            table += `<td>${element.Description}</td>`;
            table += `<td><div style="width:100px; height:100px;"><img style=" max-width: 100%; max-height:100%; margin-left:40px; margin-right:20px" src="${element.Photo}"/></div></td>`;
            table += `<td><button type="button" class="btn btn-primary edit" data-id="${index}" data-bs-toggle="modal" data-bs-target="#productFormModal"><i class="fa fa-eye" aria-hidden="true"></i></button></td>`;
            table += `<td><button type="button" class="btn btn-danger delete" data-id="${index}"><i class="fa fa-close" aria-hidden="true"></i></button></td>`;
            table += `</tr>`;
            // arr += `${index}`;
            document.querySelector("#main").innerHTML = table;
        });
    }
    editData(index) {
        console.log(index);
        let type = types;
        let id = ProductId;
        let name = ProductName;
        let price = Price;
        let category = Category;
        let desc = Description;
        btnAdd.style.display = "none";
        btnUpdate.style.display = "block";
        var product;
        if (localStorage.getItem('ProductTS') == null) {
            product = [];
        }
        else {
            product = JSON.parse(localStorage.getItem('ProductTS'));
        }
        // Show data in a modal 
        type = "Edit";
        id.value = product[index].ProductID;
        titles.textContent = "Edit Product";
        name.value = product[index].Productname;
        price.value = product[index].Price;
        category.value = product[index].Categorys;
        desc.value = product[index].Description;
        btnUpdate.addEventListener("click", function () {
            console.log(index);
            let productID = ProductId.value;
            let name = ProductName.value;
            let prices = Price.value;
            let categorys = Category.value;
            let desc = Description.value;
            let product_img = img;
            if (product_img.value != '') {
                const reader = new FileReader();
                reader.readAsDataURL(product_img.files[0]);
                reader.onload = function () {
                    let url = reader.result;
                    product[index].ProductID = productID;
                    product[index].Productname = name;
                    product[index].Price = prices;
                    product[index].Categorys = categorys;
                    product[index].Description = desc;
                    product[index].Photo = url;
                    localStorage.setItem("ProductTS", JSON.stringify(product));
                };
            }
            else {
                product[index].ProductID = productID;
                product[index].Productname = name;
                product[index].Price = prices;
                product[index].Categorys = categorys;
                product[index].Description = desc;
                localStorage.setItem("ProductTS", JSON.stringify(product));
                // showData();
            }
            location.reload();
            viewModal.reset();
            ProductId.value = "";
            ProductName.value = "";
            Price.value = "";
            Category.value = "";
            Description.value = "";
        });
    }
    deleteData(index) {
        var product;
        if (localStorage.getItem('ProductTS') == null) {
            product = [];
        }
        else {
            product = JSON.parse(localStorage.getItem('ProductTS'));
        }
        let deleted = confirm("Do you want to delete column id of " + product[index].ProductID + "?");
        if (deleted == true) {
            product.splice(index, 1);
            localStorage.setItem('ProductTS', JSON.stringify(product));
            location.reload();
        }
    }
}
