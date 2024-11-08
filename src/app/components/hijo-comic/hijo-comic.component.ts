import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../../models/comic';

@Component({
  selector: 'app-hijo-comic',
  templateUrl: './hijo-comic.component.html',
  styleUrl: './hijo-comic.component.css'
})
export class HijoComicComponent {
  @Input() comic!:Comic
  @Output() seleccionarFavoritoPadre :EventEmitter<any> = new EventEmitter()
  
  seleccionarFavorito():void{
    this.seleccionarFavoritoPadre.emit(this.comic)
  }

}
