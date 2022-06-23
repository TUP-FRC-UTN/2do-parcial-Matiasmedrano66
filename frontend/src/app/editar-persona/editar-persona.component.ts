import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/interfaces/Persona';
import { PersonaProvider } from 'src/providers/PersonaProvider';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  persona = {} as Persona;

  idPersona: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private personaProvider: PersonaProvider) { 
    this.idPersona = this.activatedRoute.snapshot.params["id"];
    this.getPersonaById();
    this.persona.id= this.idPersona;
  }

  ngOnInit(): void {
  }

  async getPersonaById(){
    await this.personaProvider.getPersonaById(this.idPersona).subscribe(data => {
      if(data.ok){
        this.persona.apellido = data.apellido;
        this.persona.dni = data.dni;
        this.persona.nombre = data.nombre;
        this.persona.sexo = data.sexo;
      }
      else
      {
        alert("no se piudieron cargar los datso de la persona");
      }
    })
  }

  async updatePersona(){

      if(this.persona.nombre == "" || this.persona.apellido == "" || this.persona.dni == ""){
        alert("Todos los campos son obliogatorios");
      }
      else{
        this.personaProvider.updatePersona(this.persona).subscribe(data => {
          if(data.ok)
          {
            alert("Persona actualizada con éxito");
            this.router.navigateByUrl("/lista");
          }
          else{
            alert("no se pudo actualizar la persona");
          }
        })
      }
     
  }

}
