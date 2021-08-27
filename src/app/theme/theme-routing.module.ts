import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinhVucComponent } from '../master-data/linh-vuc/linh-vuc.component';
import { QuyTrinhComponent } from '../master-data/quy-trinh/quy-trinh.component';
import { ThuTucComponent } from '../master-data/thu-tuc/thu-tuc.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
