import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable, Subject, timeout, timer } from 'rxjs';
import { Root, ShopingService } from './shoping.service';

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.css']
})
export class ShopingComponent implements OnInit {
  productList: any[];
  myCartService: any[];

  constructor(_ShopingService: ShopingService) {
    this.productList = _ShopingService.getApiResponse().subscribe(
      (t: any[]) => this.productList = t
    );
    this.myCartService = []

  }

  ngOnInit(): void {
  }

  addProduct(prduct: any) {
    this.myCartService.push(prduct)
  }

}


