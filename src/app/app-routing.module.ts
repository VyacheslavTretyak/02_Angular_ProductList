import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RoutingErrorComponent} from "./routing-error/routing-error.component";
import {ListComponent} from "./list/list.component";
import {AddComponent} from "./add/add.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'add', component: AddComponent},
    {path: 'list', component: ListComponent},
    {path: '**', component: RoutingErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
