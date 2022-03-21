import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteComponent } from './basic/vote/vote.component';
import { HomeComponent } from './home/home.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyForm1Component } from './my-form/my-form1/my-form1.component';
import { MyReactiveFormComponent } from './my-form/my-reactive-form/my-reactive-form.component';
import { ShopingComponent } from './shoping/shoping.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"vote",component:VoteComponent},
  {path:"Shoping",component:ShopingComponent},
  {path:"form",component:MyFormComponent},
  {path:"form1",component:MyForm1Component},
  {path:"reactive-Form",component:MyReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
