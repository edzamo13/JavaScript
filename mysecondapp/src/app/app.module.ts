import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosService } from './servicios/usuarios.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbar, MatToolbarModule, MatIcon, MatIconModule } from '@angular/material';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent, canActivate: [LoginGuard] },
  { path: 'usuarios/:id', component: UsuarioComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent,canActivate:[NoLoginGuard]  }
];


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [UsuariosService, LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
