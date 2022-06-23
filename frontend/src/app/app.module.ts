import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaComponent } from './lista/lista.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';

import { DeportesComponent } from './deportes/deportes.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PersonaProvider } from 'src/providers/PersonaProvider';
import { DeportesProvider } from 'src/providers/DeportesProvider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaComponent,
    EditarPersonaComponent,
    DeportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [PersonaProvider, DeportesProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
