import { Component } from '@angular/core';
import { Usuario } from 'src/app/Class/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: Usuario = {
    email: '',
    password: '',
  };
  peopleStorage: Usuario[] = [];
  personas: Usuario[] = [
    {
      email: 'marianoovelar200@gmail.com',
      password: '123456789',
    },
    {
      email: 'juancarlos@gmail.com',
      password: '123456789',
    },
  ];

  constructor(private toastrSvc: ToastrService) {}

  guardar() {
    localStorage.setItem('personas', JSON.stringify(this.personas));
  }
  estaElUsuario() {
    this.peopleStorage = JSON.parse(String(localStorage.getItem('personas')));
    if (
      this.peopleStorage.some((persona: Usuario) => {
        return JSON.stringify(persona) === JSON.stringify(this.user);
      })
    )
      this.toastrSvc.success(`Bienvenido ${this.user.email}`, 'Login Exitoso');
    else {
      this.toastrSvc.error(`No se pudo encontrar al usuario`, 'Error');
    }
  }
  cargarUsuario() {
    this.user.email = 'marianoovelar200@gmail.com';
    this.user.password = '123456789';
  }
}
