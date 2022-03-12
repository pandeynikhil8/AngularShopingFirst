import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VoteComponent } from './basic/vote/vote.component';
import { HomeComponent } from './home/home.component';
import { ShopingComponent } from './shoping/shoping.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"vote",component:VoteComponent},
  {path:"Shoping",component:ShopingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
