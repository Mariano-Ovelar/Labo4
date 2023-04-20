import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/Class/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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
  constructor(private toastrSvc: ToastrService, private router:Router) {}

  guardar() {
    localStorage.setItem('personas', JSON.stringify(this.personas));
    this.toastrSvc.success(
      `Se caragaron dos usuarios para probar localstorage`,
      'Registro Exitoso'
    );
  }
  estaElUsuario() {
    this.peopleStorage = JSON.parse(String(localStorage.getItem('personas')));
    if (
      this.peopleStorage.some((persona: Usuario) => {
        return (
          JSON.stringify(persona.email) === JSON.stringify(this.user.email)
        );
      })
    )
      this.toastrSvc.error(
        `Ya Existe este usuario: ${this.user.email}`,
        'Error'
      );
    else {
      this.peopleStorage.push(this.user)
    localStorage.setItem('personas', JSON.stringify(this.peopleStorage));
      this.toastrSvc.success(
        `El Usuario ${this.user.email}`,
        'Registro Exitoso'
      );
      this.router.navigateByUrl('/login');
    }
  }
  cargarUsuario() {
    this.user.email = 'marianoovelar200@gmail.com';
    this.user.password = '123456789';
  }
}
