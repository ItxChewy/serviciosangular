import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class ServicePlantillas{

    constructor(private _hhtp : HttpClient){}

    getPlantillaFunciones():Observable<any>{
        let request = "api/plantilla/funciones"
        let url = environment.urlPlantilla + request
        return this._hhtp.get(url)
    }

    getEmpleadosPorFuncion(funcion:string):Observable<any>{
        let request = "api/plantilla/plantillafuncion/" + funcion
        let url = environment.urlPlantilla + request
        return this._hhtp.get(url)
    }

    getPlantillaFuncionesMultiples(funciones: Array<string>):Observable<any>{
        //funcion=ENFERMERA&funcion=ENFERMERO&funcion=INTERINO
        let data = "";
        for(var funcion of funciones){
            data += "funcion=" + funcion + "&";
        }

        data = data.substring(0,data.length - 1);
        let request = "api/plantilla/plantillafunciones?" + data;
        let url = environment.urlPlantilla + request;
        return this._hhtp.get(url);
    }
}