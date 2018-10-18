import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

//Rutas
import { APP_ROUTES } from './app.routes';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//InfiniteScroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PrensaComponent } from './pages/prensa/prensa.component';
import { DifmunicipalComponent } from './pages/difmunicipal/difmunicipal.component';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    PrensaComponent,
    DifmunicipalComponent,
    TransparenciaComponent,
    ArticuloComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    InfiniteScrollModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* platformBrowserDynamic().bootstrapModule(AppModule); */