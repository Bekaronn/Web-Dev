import {Component, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../products";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
      CommonModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  product : Product | undefined;
  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = products.at(productId - 1);
  }

  shareOnWhatsApp(): void {
    const encodedLink = encodeURIComponent("http://localhost:4200/details/"+this.product?.id);
    window.open(`https://wa.me/?text=${encodedLink}`, '_blank');
  }

  shareOnTelegram(): void {
    const encodedLink = encodeURIComponent("http://localhost:4200/details/"+this.product?.id);
    window.open(`https://t.me/share/url?url=${encodedLink}`, '_blank');
  }


}
