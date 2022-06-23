import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportesComponent } from './deportes/deportes.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path: "lista", component: ListaComponent},
  {path: "deportes", component: DeportesComponent},
  {path: "editarPersona/:id", component: EditarPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
