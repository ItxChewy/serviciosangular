import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../../models/comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-padre-comics',
  templateUrl: './padre-comics.component.html',
  styleUrl: './padre-comics.component.css',
})
export class PadreComicsComponent implements OnInit {
  public comics!: Array<Comic>
  public mensaje!: string
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef!: ElementRef;
  @ViewChild("cajapersonaje") cajaPersonajeRef!: ElementRef;

  constructor(
    private _service: ServiceComics
  ) { }
  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  seleccionarFavoritoPadre(event: Comic): void {
    this.mensaje = "El comic favorito es: " + event.nombre
  }

  crearComic(event: Event): void {
    event.preventDefault()
    let nombre = this.cajaNombreRef.nativeElement.value;
    let imagen = this.cajaImagenRef.nativeElement.value;
    let personaje = this.cajaPersonajeRef.nativeElement.value;
    let comic =
      new Comic(
        nombre,
        imagen,
        personaje
      )
    this.comics.push(comic)
  }
}
