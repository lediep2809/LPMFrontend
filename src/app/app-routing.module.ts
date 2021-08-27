import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LinhVucComponent } from './master-data/linh-vuc/linh-vuc.component';
import { QuyTrinhComponent } from './master-data/quy-trinh/quy-trinh.component';
import { ThuTucComponent } from './master-data/thu-tuc/thu-tuc.component';
import { AlertComponent } from './theme/alert/alert.component';
import { HomeComponent } from './theme/home/home.component';

const routes: Routes = [

{ path:"" , component :LoginComponent, children : [
{ path:"alert" , component :AlertComponent},
]},

{ path:"home" , component :HomeComponent, children : [
{ path:"linh-vuc" , component :LinhVucComponent},
{ path:"thu-thuc" , component :ThuTucComponent},
{ path:"quy-trinh" , component :QuyTrinhComponent},
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
