import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaProvider } from 'src/providers/PersonaProvider';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaPersonas: any = [];

  constructor(private personaProvider: PersonaProvider, private router: Router) {
    this.getPersonas();
   }

  ngOnInit(): void {
  }

  editarPersona(id:string){
    this.router.navigateByUrl("/editarPersona/" + id);
  }

  async getPersonas(){
    await this.personaProvider.getPersonas().subscribe(data => {
      if(data.ok)
      {
        this.listaPersonas = data.listaPersonas;
      }
      else{
        alert("no se pudieron cargar las personas");
      }
    })
  }

}
