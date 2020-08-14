import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Copa';


  constructor() {
    console.log('construtor')
  }

  funcao(){
    console.log('funcao')
  }
}
