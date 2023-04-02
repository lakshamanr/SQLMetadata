import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component'; 

import { LeftMenuModule } from './left-menu/left-menu.module';
import { FooterMenuModule } from './footer-menu/footer-menu.module';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent, 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    LeftMenuModule,
    FooterMenuModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }, 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
