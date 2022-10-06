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
import { AltaPizzaComponent } from './components/alta-pizza/alta-pizza.component';
import { BajaPizzaComponent } from './components/baja-pizza/baja-pizza.component';
import { ModificarPizzaComponent } from './components/modificar-pizza/modificar-pizza.component';
import { SalenPizzasComponent } from './pages/salen-pizzas/salen-pizzas.component';
import { ListaPizzasComponent } from './components/lista-pizzas/lista-pizzas.component';


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
    AltaPizzaComponent,
    BajaPizzaComponent,
    ModificarPizzaComponent,
    SalenPizzasComponent,
    ListaPizzasComponent,
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
