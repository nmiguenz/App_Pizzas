import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  islogged: boolean = false;
  user: any;
  @Input() admin: boolean = false;

   constructor(private auth: AuthService, private route: Router) { }

   cambiarPantalla(opcion: boolean){
     this.auth.pantallaSelect(opcion);
     this.route.navigateByUrl('productos');
   }

   signOut(){
     this.auth.deleteData('usuarioLogueado');
     this.route.navigateByUrl('ingreso');
   }

 }
