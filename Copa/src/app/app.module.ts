import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCopaComponent } from './criar-copa/criar-copa.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarCopaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CriarCopaComponent]
})
export class AppModule { }
