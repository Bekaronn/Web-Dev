import { Component } from '@angular/core';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    TopBarComponent,
    ProductListComponent,
    RouterOutlet,
    RouterLink,
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
