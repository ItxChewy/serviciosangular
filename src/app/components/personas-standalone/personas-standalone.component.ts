import { Component, OnInit } from '@angular/core';
import { Personas } from '../../../models/persona';
import { ServicePersonas } from '../../services/service.personas';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-personas-standalone',
  templateUrl: './personas-standalone.component.html',
  standalone:true,
  imports:[NgFor,NgIf],
  providers:[ServicePersonas]
})
export class PersonasStandaloneComponent implements OnInit {
  public personas!:Array<Personas>
  constructor(private _service: ServicePersonas){}

  ngOnInit(): void {
    //con 1era forma
    // this._service.getPersonas().subscribe(response =>{
    //   console.log("leyendo")
    //   this.personas = response
    // })

    //con 2nd forma Promesa
    this._service.getPersonasPromesa().then(response =>{
      this.personas = response;
    })

}
}
