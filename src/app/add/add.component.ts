import { Component, Input } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() ps: ProductsService;
  product = {};
  onAdd() {
    alert('click add');
    this.ps.add(this.product);
    this.product = {};
  }
}
