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

@NgModule({
  declarations: [
    AppComponent,
    PadreComicsComponent,
    HijoComicComponent,
    HomeComponentComponent,
    MenuComponent,
    PersonasApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ServiceComics,ServicePersonas,provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
