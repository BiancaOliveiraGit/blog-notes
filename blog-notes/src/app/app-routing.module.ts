import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'app-add-page', pathMatch: 'full'},
  {path: 'app-add-page', component: AddPageComponent},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

