import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, interval, map, Observable, switchMap, take, timeout, timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingService {
  productList: Root;
  http :HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
    this.productList = this.getApiResponse() ;

  }

  getApiResponse(): any {
    return this.http.get<Root>("https://fakestoreapi.com/products")
  }

}
export interface Root {
}
