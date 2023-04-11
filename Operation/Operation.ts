import { ProductId, ProductName, Price, Description, Category, img, viewModal } from "../crud.js";
import { Validation } from "./Validation.js";

interface ShowP {
    ProductID: string,
    Productname: string,
    Price: string,
    Categorys: string,
    Description: string,
    Photo: any
}

let arr: ShowP[];

var validate = new Validation();
export class Operation {
    operation(oper: string) {
        switch (oper) {
            case "btnAdd":
                if (validate.validation()) {
                    if (localStorage.getItem('ProductTS') == null) {
                        arr = [];
                    } else {
                        arr = JSON.parse(localStorage.getItem('ProductTS')!);
                    }
                    let reader = new FileReader();
                    reader.readAsDataURL(img.files[0]);
                    reader.addEventListener('load', () => {
                        let photos = reader.result;
                        arr.push({
                            ProductID: ProductId.value,
                            Productname: ProductName.value,
                            Price: Price.value,
                            Categorys: Category.value,
                            Description: Description.value,
                            Photo: photos
                        });
                        localStorage.setItem('ProductTS', JSON.stringify(arr));

                        location.reload();
                    });
                    viewModal.reset();
                }
                break;

            case "btnClose":
                location.reload();

                ProductId.value = "";
                ProductName.value = "";
                Price.value = "";
                Category.value = "";
                Description.value = "";
                break;
        }
    }
}