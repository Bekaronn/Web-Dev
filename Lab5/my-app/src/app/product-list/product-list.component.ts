import { Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductItemComponent} from "../product-item/product-item.component";
import {Product, products} from "../products";
import {AppComponent} from "../app/app.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductItemComponent,
    AppComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products];
  selectedCategory: string = 'all';

  onCategorySelected(category: string) {
    console.log('Selected category:', category);
    this.selectedCategory = category
  }

  removeById(id: string){
    const index = this.products.findIndex(product => product.id.toString() === id.toString());
    this.products.splice(Number(index), 1);
    console.log(Number(id) - 1)
  }

  isCategorySuitable(product: Product): boolean {
    if(this.selectedCategory == 'all'){
      return true
    }
    let bool = this.selectedCategory == product.category;
    return bool;
  }
}
