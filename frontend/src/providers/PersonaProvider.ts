import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Persona } from "src/interfaces/Persona";

@Injectable()
export class PersonaProvider{

    private apiURL = environment.apiURL;

    constructor(private cliente: HttpClient) {

    }

    getPersonas():Observable<any>{
        const headers = {"content-type": "application/json"}
        const url = this.apiURL + 'api/persona/GetTodas';
        return this.cliente.get(url, {"headers": headers});
    }
    getPersonaById(id:string):Observable<any>{
        const headers = {"content-type": "application/json"}
        const url = this.apiURL + 'api/persona/GetPersona/' + id;
        return this.cliente.get(url, {"headers": headers});
    }

    updatePersona(persona:Persona):Observable<any>{
        const headers = {"content-type": "application/json"}
        const url = this.apiURL + 'api/persona/UpdatePersona';
        let comando = {
            "id": persona.id,
            "nombre": persona.nombre,
            "apellido": persona.apellido,
            "dni": persona.dni
          };
          console.log(comando);
        let query = JSON.stringify(comando);
        return this.cliente.put(url, query, {"headers": headers});
    }
}