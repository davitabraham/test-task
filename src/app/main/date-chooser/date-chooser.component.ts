import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ProductsService} from '../../shared/services/products/products.service';

@Component({
  selector: 'app-date-chooser',
  templateUrl: './date-chooser.component.html',
  styleUrls: ['./date-chooser.component.css']
})
export class DateChooserComponent implements OnInit {
  date: FormControl = new FormControl('');
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {

  }

  public dateChange($event: MatDatepickerInputEvent<any, any | null>) {
    this.productsService.date$.next($event.value);
  }


}
