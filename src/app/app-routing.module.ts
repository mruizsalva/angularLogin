import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';

const routes: Routes = [
  { path: 'usuarios', loadChildren: () => import('./feature/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'productos', loadChildren: () => import('./feature/productos/productos.module').then(m => m.ProductosModule) },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
