import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario, LoginUser } from '../usuarios/model/usuarios.model';
import { UsuariosService } from '../usuarios/service/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private aRoute: ActivatedRoute, private fb: FormBuilder,
    private _usuariosService: UsuariosService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  loginUsuario() {
    const usuario: LoginUser = {
      nombre: this.form.value.nombre,
      password: this.form.value.password,
    };
    this._usuariosService.login(usuario).subscribe(data => {
    })
  }
}
