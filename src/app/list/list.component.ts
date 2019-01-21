import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    products = [];
    search = '';
    constructor(private ps: ProductsService) {
        this.products = ps.getAll();
    }

    ngOnInit() {
    }

    onSearch() {
        this.products = this.ps.getAll(this.search);
    }


}
