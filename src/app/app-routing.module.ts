import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from '../app/header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {component:HeaderComponent},
  {component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
