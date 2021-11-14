import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MechanicPageComponent } from './mechanic-page/mechanic-page.component';

@NgModule({
    declarations: [LayoutComponent,MenuComponent, HomeComponent, SignInComponent, PageNotFoundComponent, MechanicPageComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
