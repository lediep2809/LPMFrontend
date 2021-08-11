import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterDataModule } from './master-data/master-data.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
