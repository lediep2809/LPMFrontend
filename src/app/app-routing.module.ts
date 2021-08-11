import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LinhVucComponent } from './master-data/linh-vuc/linh-vuc.component';
import { QuyTrinhComponent } from './master-data/quy-trinh/quy-trinh.component';
import { ThuTucComponent } from './master-data/thu-tuc/thu-tuc.component';

const routes: Routes = [{ path:"", component: LoginComponent},
{ path:"linh-vuc", component: LinhVucComponent},
{ path:"quy-trinh", component: QuyTrinhComponent},
{ path:"thu-tuc", component: ThuTucComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
