import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MechanicPageComponent } from './mechanic-page/mechanic-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "mechanic-page", component: MechanicPageComponent },
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
