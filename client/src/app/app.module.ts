import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrestamosListComponent } from './components/prestamos-list/prestamos-list.component';

// Services
import { PrestamosService } from './services/prestamos.service';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';
import { PrestamoEditComponent } from './prestamo-edit/prestamo-edit.component';
import { MultaFormComponent } from './components/multa-form/multa-form.component';
import { MultaListComponent } from './components/multa-list/multa-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationBComponent } from './components/navigation-b/navigation-b.component';
import { NavigationUComponent } from './components/navigation-u/navigation-u.component';
import { MapaComponent } from './components/mapa/mapa.component';

// Importa AuthGuard aquí
import { AuthGuard } from './guards/auth.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PrestamosListComponent,
    PrestamoFormComponent,
    PrestamoEditComponent,
    MultaFormComponent,
    MultaListComponent,
    BookFormComponent,
    BooksListComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    LoginComponent,
    NavigationBComponent,
    NavigationUComponent,
    MapaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PrestamosService,
    AuthGuard, // Añade AuthGuard aquí
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
