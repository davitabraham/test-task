import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../shared/services/products/products.service';
import {Subject} from 'rxjs';
import * as moment from 'moment';
import {takeUntil} from 'rxjs/operators';

export interface Article {
  id: number;
  name: string;
  unit_price: number;
  date: string;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-product-chooser',
  templateUrl: './product-chooser.component.html',
  styleUrls: ['./product-chooser.component.css']
})
export class ProductChooserComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<any> = new Subject();
  private data: any;
  public dataSource: Article[];

  public displayedColumns: string[] = ['name', 'unit_price', 'quantity', 'total'];

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getArticles() {
    this.productsService.getArticles().subscribe(products => {
      this.data = products;
      this.followDateChanges();
    });
  }

  private followDateChanges() {
    this.productsService.date$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(date => {
      if (date) {
        this.dataSource = this.data.filter(item => moment(date).isSame(new Date( item.date)));
      }
    });
  }

}
