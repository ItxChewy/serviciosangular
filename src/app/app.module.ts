import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComicsComponent } from './components/padre-comics/padre-comics.component';
import { HijoComicComponent } from './components/hijo-comic/hijo-comic.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasApiComponent } from './components/personas-api/personas-api.component';
import { PersonasStandaloneComponent } from './components/personas-standalone/personas-standalone.component';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple/plantilla-funcion-simple.component';
import { ServicePlantillas } from './services/service.plantillas';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple/plantilla-funcion-multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComicsComponent,
    HijoComicComponent,
    HomeComponentComponent,
    MenuComponent,
    PersonasApiComponent,
    CochesComponent,
    PlantillaFuncionSimpleComponent,
    PlantillaFuncionMultipleComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonasStandaloneComponent
  ],
  providers: [ServiceComics,ServicePersonas,ServiceCoches,ServicePlantillas,provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
