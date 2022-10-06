import { DetalleRepartidorComponent } from './pages/detalle-repartidor/detalle-repartidor.component';
import { AuthGuard } from './guards/auth.guard';
import { ControlBienvenidaGuard } from './guards/control-bienvenida.guard';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPrimeraComponent } from './pages/alta-primera/alta-primera.component';
import { SalenPizzasComponent } from './pages/salen-pizzas/salen-pizzas.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: 'bienvenida', component: BienvenidaComponent, canActivate: [ControlBienvenidaGuard]},
  { path: 'ingreso', loadChildren: () => import('./modules/ingreso/ingreso.module').then(m => m.IngresoModule) },
  { path: 'alta', component: AltaPrimeraComponent, canActivate: [AuthGuard]},
  { path: 'detalle', component: DetalleRepartidorComponent, canActivate: [AuthGuard]},
  { path: 'pizzas', component: SalenPizzasComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: '',   redirectTo: '/bienvenida', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
