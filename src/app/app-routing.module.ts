import { AuthGuard } from './guards/auth.guard';
import { ControlBienvenidaGuard } from './guards/control-bienvenida.guard';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPrimeraComponent } from './pages/alta-primera/alta-primera.component';

const routes: Routes = [
  { path: 'bienvenida', component: BienvenidaComponent, canActivate: [ControlBienvenidaGuard]},
  { path: 'ingreso', loadChildren: () => import('./modules/ingreso/ingreso.module').then(m => m.IngresoModule) },
  { path: 'alta', component: AltaPrimeraComponent, canActivate: [AuthGuard]},
  { path: '',   redirectTo: '/bienvenida', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
