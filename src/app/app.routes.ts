import {RouterModule, Routes } from "@angular/router";

import { InicioComponent } from "./pages/inicio/inicio.component";
import { PrensaComponent } from "./pages/prensa/prensa.component";
import { ArticuloComponent } from "./pages/articulo/articulo.component";




const appRoutes: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'prensa', component: PrensaComponent},
    { path: 'articulo/:id', component: ArticuloComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: '**', redirectTo: '/inico', pathMatch: 'full'}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash:true } );