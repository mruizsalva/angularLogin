import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import { LoginUser, Usuario } from '../model/usuarios.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private myAppUrl: string = enviroment.endpoint;
  private myApiUrl: string = 'api/Usuarios';

  constructor(private http: HttpClient) { }

  login(usuario: LoginUser): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.myAppUrl}${this.myApiUrl}/login`, usuario);
  }


}
