import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Product, products} from "../products";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() remove = new EventEmitter<string>();

  removeByID(id: string){
    this.remove.emit(id)
  }

  toggleLike(product: Product){
    if(product.likesClicked){
      product.likes -= 1
    } else {
      product.likes += 1
    }
    product.likesClicked = !product.likesClicked
    console.log("fdf")
  }
}
