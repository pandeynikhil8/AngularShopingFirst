import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Root } from '../shoping.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  display = 'show'
  nodisplay = ''
  @Input("myCartService") ListOfProduct: any[];
  constructor() {
    this.ListOfProduct = [];
  }

  ngOnInit(): void {
  }


}
