import {Component, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Output() categorySelected = new EventEmitter<string>();
  categories = ["iphone","phone"]

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
