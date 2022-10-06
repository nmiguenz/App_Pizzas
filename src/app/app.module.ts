import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

//Modulos AngularFire
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AltaPrimeraComponent } from './pages/alta-primera/alta-primera.component';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component';
import { DetalleRepartidorComponent } from './pages/detalle-repartidor/detalle-repartidor.component';
import { ListadoRepartidorComponent } from './components/listado-repartidor/listado-repartidor.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { TransformBooleanPipe } from './pipes/transform-boolean.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavbarComponent,
    AltaPrimeraComponent,
    ListadoPaisesComponent,
    DetalleRepartidorComponent,
    ListadoRepartidorComponent,
    DetalleComponent,
    DetallePaisComponent,
    TransformBooleanPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
