import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeRoutingModule } from './theme-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  exports: [FooterComponent]
})
export class ThemeModule { }
