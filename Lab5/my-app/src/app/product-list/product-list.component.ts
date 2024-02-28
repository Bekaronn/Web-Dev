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
  allAvailableProduct: Product[] = [...products];
  products: Product[] = [...products];
  selectedCategory: string = 'all';

  onCategorySelected(category: string) {
    console.log('Selected category:', category);
    if(category == 'all'){
      this.products = this.allAvailableProduct
    } else {
      this.products = []
      for(let i = 0; i < this.allAvailableProduct.length; i++){
        if(this.allAvailableProduct[i].category == category){
          this.products.push(this.allAvailableProduct[i])
        }
      }
    }

    this.selectedCategory = category
  }

  removeById(id: string){
    let index = this.products.findIndex(product => product.id.toString() === id.toString());
    this.products.splice(Number(index), 1);
    index = this.allAvailableProduct.findIndex(product => product.id.toString() === id.toString());
    this.allAvailableProduct.splice(Number(index), 1);
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
