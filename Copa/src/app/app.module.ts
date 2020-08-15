import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCopaComponent } from './criar-copa/criar-copa.component';
import {CopaServiceService} from './copa-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule  } from "@angular/common/http";
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    CriarCopaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatListModule,

  ],
  providers: [CopaServiceService],
  bootstrap: [CriarCopaComponent]
})
export class AppModule { }
