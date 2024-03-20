import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { PaginetionComponent } from './paginetion/paginetion.component';

const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'update/:id',component:UpdateComponent},
  //{path:'paginetion',component:PaginetionComponent},
  {path:'',redirectTo:'list', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
