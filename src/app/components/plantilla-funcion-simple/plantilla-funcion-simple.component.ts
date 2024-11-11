import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../../models/plantilla';
import { ServicePlantillas } from '../../services/service.plantillas';

@Component({
  selector: 'app-plantilla-funcion-simple',
  templateUrl: './plantilla-funcion-simple.component.html',
  styleUrl: './plantilla-funcion-simple.component.css'
})
export class PlantillaFuncionSimpleComponent implements OnInit {
  @ViewChild("selectfuncion") selectRef !: ElementRef

  public funciones !: Array<Plantilla>
  public empleados !: Array<Plantilla>
  constructor(private _service: ServicePlantillas) { }

  ngOnInit(): void {
    this._service.getPlantillaFunciones().subscribe(response => {
      this.funciones = response;
    })
  }

  getEmpleados(){
    let option = this.selectRef.nativeElement.value
    this._service.getEmpleadosPorFuncion(option).subscribe(response =>{
      this.empleados = response
      console.log(this.empleados)
    })
  }

}
