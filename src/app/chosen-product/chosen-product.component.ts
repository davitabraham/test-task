import {Component, OnInit} from '@angular/core';

export interface ChosenArticles {
  id: number;
  name: string;
  unit_price: number;
  date: string;
  quantity: number;
  total_price: number;
}
@Component({
  selector: 'app-chosen-product',
  templateUrl: './chosen-product.component.html',
  styleUrls: ['./chosen-product.component.css']
})

export class ChosenProductComponent implements OnInit {

  public dataSource: ChosenArticles[];

  public displayedColumns: string[] = ['name', 'unit_price', 'total'];

  constructor() { }

  ngOnInit(): void {

   const data = localStorage.getItem('products');
   if (data) {
     this.dataSource = JSON.parse(data);
   }
  }


}
