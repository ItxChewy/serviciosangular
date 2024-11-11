import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Plantilla } from '../../../models/plantilla';
import { ServicePlantillas } from '../../services/service.plantillas';

@Component({
  selector: 'app-plantilla-funcion-multiple',
  templateUrl: './plantilla-funcion-multiple.component.html',
  styleUrl: './plantilla-funcion-multiple.component.css'
})
export class PlantillaFuncionMultipleComponent implements OnInit {
  @ViewChild("selectfunciones") selectRef !: ElementRef

  public funciones !: Array<string>
  public empleados !: Array<Plantilla>
  public funcionesSeleccionadas: Array<string>
  constructor(private _service: ServicePlantillas) { 
    this.funcionesSeleccionadas = new Array<string>();
  }

  ngOnInit(): void {
    this._service.getPlantillaFunciones().subscribe(response => {
      this.funciones = response;
    })
  }

  getEmpleados(){
    let aux = new Array<string>();
    for(var option of this.selectRef.nativeElement.options){
      if(option.selected == true){
        aux.push(option.value);
      }
    }
    this.funcionesSeleccionadas = aux;
    this._service.getPlantillaFuncionesMultiples(aux).subscribe(response =>{
      this.empleados = response
    })
  }
}


