import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  islogged: boolean = false;
  user: any;
  pantallaProd: boolean = true;
  perfil: string = '';

  constructor() { }

  setData(key: string, value: any ){
    sessionStorage.setItem(key,value);
  }

  getData(key: string) {
    return sessionStorage.getItem(key);
  }

  comprobarEstado(){
    this.user = this.getData('usuarioLogueado');

    if(this.user){
      return this.islogged = JSON.parse(this.user).logged;
    }
  }

  comprobarPerfilAdmin(){
    this.user = this.getData('usuarioLogueado');

    if(this.user){
      this.perfil = JSON.parse(this.user).perfil;
      if (this.perfil === 'admin')
        return true
      else
        return false
    }
    return false
  }

  deleteData(key: string){
    this.islogged = false;
    sessionStorage.removeItem(key);
  }

  pantallaSelect(opcion: boolean){
    return this.pantallaProd = opcion;
  }
}
