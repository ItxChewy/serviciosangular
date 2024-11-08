import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Personas } from '../../../models/persona';

@Component({
  selector: 'app-personas-api',
  templateUrl: './personas-api.component.html',
  styleUrl: './personas-api.component.css'
})
export class PersonasApiComponent implements OnInit {
  
  public personas!:Array<Personas>
  constructor(private _service: ServicePersonas){}

  ngOnInit(): void {
    this._service.getPersonas().subscribe(response =>{
      console.log("leyendo")
      this.personas = response
    })
  }
}
