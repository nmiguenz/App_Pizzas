import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  listaUsuarios: [] | any;
  loginGroup: FormGroup | any;
  usuarioSelect: {} | any;

  constructor(private fb: FormBuilder, private route: Router, private auth: AuthService) {
    this.listaUsuarios = [
      {
        id: 1,
        email: 'jperez@gmail.com',
        password: '1111',
        perfil: 'admin',
        color: 'primary',
      },
      {
        id: 2,
        email: 'rgonzalez@gmail.com',
        password: '2222',
        perfil: 'empleado',
        color: 'secondary',
      },
      {
        id: 3,
        email: 'roland@gmail.com',
        password: '1111',
        perfil: 'empleado',
        color: 'secondary',
      },
    ];

    this.loginGroup = fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
    this.auth.setData('controlInicial', 'activado');
  }

  ngDoCheck(): void {
    if (this.auth.islogged)
      this.route.navigateByUrl('alta');
  }

  rellenarInputs(id: number) {
    this.usuarioSelect = this.listaUsuarios[id - 1];
    this.loginGroup.controls.email.setValue(this.usuarioSelect.email);
    this.loginGroup.controls.password.setValue(this.usuarioSelect.password);
  }

  ingresar() {
    let stringUsurio = JSON.stringify({
                      email: this.usuarioSelect.email,
                      perfil: this.usuarioSelect.perfil,
                      logged: true,
                    });

    try {
      this.auth.setData('usuarioLogueado', stringUsurio);
    } catch (error) {
      console.log(error);
    }
  }

}
