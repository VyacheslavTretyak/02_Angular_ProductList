import {Injectable} from '@angular/core';

@Injectable()
export class ProductsService {
    products = [];
    add(product){
        this.products.push(product);
    }
    getAll(search= '') {
        const sproducts = [];
        this.products.forEach(function (el) {
            if (el.name.indexOf(search) >= 0) {
                sproducts.push(el);
            }
        });
        return sproducts;
    }
}