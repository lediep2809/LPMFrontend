import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinhVucComponent } from './linh-vuc/linh-vuc.component';
import { ThuTucComponent } from './thu-tuc/thu-tuc.component';
import { QuyTrinhComponent } from './quy-trinh/quy-trinh.component';



@NgModule({
  declarations: [
    LinhVucComponent,
    ThuTucComponent,
    QuyTrinhComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class MasterDataModule { }
