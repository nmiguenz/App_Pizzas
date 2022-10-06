import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,  DoCheck {

  islogged: boolean = false;
  esAdmin: boolean = false;
  user: any;
  title = 'Primer parcial';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.islogged = this.auth.comprobarEstado();
    this.esAdmin = this.auth.comprobarPerfilAdmin();
  }

  ngDoCheck(): void {
    this.islogged = this.auth.comprobarEstado();
    this.esAdmin = this.auth.comprobarPerfilAdmin();
  }

}

