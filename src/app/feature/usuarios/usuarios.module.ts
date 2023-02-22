import { NgModule } from '@angular/core';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UsuariosFormComponent,
    UsuariosListComponent
  ],
  imports: [
    UsuariosRoutingModule,
    CommonModule
  ],
  providers: [],
})
export class UsuariosModule { }
