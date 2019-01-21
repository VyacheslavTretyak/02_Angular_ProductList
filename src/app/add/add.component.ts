import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  product = {};
  constructor(private ps: ProductsService){

  }
  onAdd() {
    this.ps.add(this.product);
    this.product = {};
  }
}
