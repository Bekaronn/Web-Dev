import { Component} from '@angular/core';
import {products} from "../products";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  shareOnWhatsApp(link: string): void {
    // const encodedLink = encodeURIComponent(link);
    // window.open(`https://wa.me/?text=${encodedLink}`, '_blank');
  }

  shareOnTelegram(link: string): void {
    // const encodedLink = encodeURIComponent(link);
    // window.open(`https://t.me/share/url?url=${encodedLink}`, '_blank');
  }
}
