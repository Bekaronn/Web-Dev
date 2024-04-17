import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Company} from "./interfaces/company.interface";
import {CompanyService} from "./services/company.service";
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'hh-front';
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe(data => this.companies = data);
  }
}
