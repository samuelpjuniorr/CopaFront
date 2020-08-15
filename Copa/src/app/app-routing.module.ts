import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarCopaComponent } from './criar-copa/criar-copa.component';

const routes: Routes = [
    { path: 'criar-copa', component: CriarCopaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
