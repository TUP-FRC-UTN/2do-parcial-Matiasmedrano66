import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class DeportesProvider{

    private apiURL = environment.apiURL;

    constructor(private cliente: HttpClient) {

    }

    getDeportes():Observable<any>{
        const headers = {"content-type": "application/json"}
        const url = this.apiURL + 'api/deporte/getdeportes';
        return this.cliente.get(url, {"headers": headers});
    }
   
}