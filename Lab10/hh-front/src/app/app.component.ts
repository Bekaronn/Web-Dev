import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
