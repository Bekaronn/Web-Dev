import { Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductItemComponent} from "../product-item/product-item.component";
import {products} from "../products";
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
  products= [...products];
  selectedCategory: string;

  onCategorySelected(category: string) {
    console.log('Selected category:', category);
    this.selectedCategory = category
  }
}
