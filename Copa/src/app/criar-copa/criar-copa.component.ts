import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './criar-copa.component.html',
  styleUrls: ['./criar-copa.component.css']
})
export class CriarCopaComponent  {
  title = 'Criar Copa';

  constructor() {
    console.log('construtor')
  }

  funcao(){
    console.log('funcao')
  }


}
