import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './basic/vote/vote.component';
import { CommonComponent } from './common/common.component';
import { ResultComponent } from './basic/vote/result/result.component';
import { HomeComponent } from './home/home.component';
import { ShopingComponent } from './shoping/shoping.component';
import {HttpClientModule} from '@angular/common/http'
import { ShopingService } from './shoping/shoping.service';
import { CartComponent } from './shoping/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    CommonComponent,
    ResultComponent,
    HomeComponent,
    ShopingComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShopingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
