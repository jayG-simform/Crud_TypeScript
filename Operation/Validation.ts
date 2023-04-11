import { errorID,errorName,errorCategory,errorDesc,errorImg,errorPrice,ProductId,ProductName,Price,img,Description,Category } from "../crud.js";
let flag:boolean = true;

export class Validation{
    validation() {
        if (ProductId.value == "") {
            errorID!.textContent = "ID is required";
            flag = false;
        }
        else if (ProductId.value < (0).toString()) {
            errorID!.textContent = "Please enter positive number";
            flag = false;
        }
        else if (ProductId.value !== "") {
            errorID!.textContent = "";
            flag = true;
        }
    
        if (ProductName.value == "") {
            errorName!.textContent = "Product Name is required";
            flag = false;
        }
        else if (ProductName.value !== "") {
            errorName!.textContent = "";
            flag = true;
        }
    
        if (Price.value == "") {
            errorPrice!.textContent = "Product price is required";
            flag = false;
        }
        else if (Price.value < (0).toString()) {
            errorPrice!.textContent = "Please enter positive number in price";
            flag = false;
        }
        else if (Price.value !== "") {
            errorPrice!.textContent = "";
            flag = true;
        }
    
        if (img.value == "") {
            errorImg!.textContent = "Please select any image";
        }
        else if (img.value !== "") {
            errorImg!.textContent = "";
        }
        
        if (Category.value == "") {
            errorCategory!.textContent = "Category is required";
            flag = false;
        }
        else if (Category.value !== "") {
            errorDesc!.textContent = "";
            flag = true;
        }

        if (Description.value == "") {
            errorDesc!.textContent = "Description is required";
            flag = false;
        }
        else if (Description.value !== "") {
            errorDesc!.textContent = "";
            flag = true;
        }
        return flag;
    }
    editValidate(){
        if (ProductId.value == "") {
            errorID!.textContent = "ID is required";
            return false;
        }
        else if (ProductId.value < (0).toString()) {
            errorID!.textContent = "Please enter positive number";
            return false;
        }
    
        if (ProductName.value == "") {
            errorName!.textContent = "Product Name is required";
            return false;
        }
    
        if (Price.value == "") {
            errorPrice!.textContent = "Product price is required";
            return false;
        }

        if (Category.value == "") {
            errorCategory!.textContent = "Category is required";
            flag = false;
        }
        
        if (Description.value == "") {
            errorDesc!.textContent = "Description is required";
            return false;
        }
    
        return true;
    }
    
}