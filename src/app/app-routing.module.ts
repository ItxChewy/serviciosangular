import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { PadreComicsComponent } from './components/padre-comics/padre-comics.component';
import { PersonasApiComponent } from './components/personas-api/personas-api.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple/plantilla-funcion-simple.component';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple/plantilla-funcion-multiple.component';

const routes: Routes = [
  {
    path:"", component:HomeComponentComponent
  },
  {
    path:"padrecomics", component:PadreComicsComponent
  },
  {
    path:"personas", component:PersonasApiComponent
  },
  {
    path:"coches", component:CochesComponent
  },
  {
    path:"plantillasimple", component:PlantillaFuncionSimpleComponent
  },
  {
    path:"plantillamultiple", component:PlantillaFuncionMultipleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
