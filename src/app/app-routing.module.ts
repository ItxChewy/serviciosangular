import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { PadreComicsComponent } from './components/padre-comics/padre-comics.component';
import { PersonasApiComponent } from './components/personas-api/personas-api.component';

const routes: Routes = [
  {
    path:"", component:HomeComponentComponent
  },
  {
    path:"padrecomics", component:PadreComicsComponent
  },
  {
    path:"personas", component:PersonasApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
