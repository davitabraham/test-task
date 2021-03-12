import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/services/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  public resetChosenArticles() {
    this.productService.date$.next(null);
    localStorage.clear();
  }
}
