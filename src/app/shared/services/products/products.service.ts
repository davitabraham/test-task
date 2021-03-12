import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public date$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private readonly apiService: ApiService) { }

  public getArticles() {
    return this.apiService.request('get', 'products', null, true);
  }
}
