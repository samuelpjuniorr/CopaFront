import { Component } from '@angular/core';
import { CopaServiceService } from '../copa-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-copa',
  templateUrl: './criar-copa.component.html',
  styleUrls: ['./criar-copa.component.css']
})
export class CriarCopaComponent  {
  title = 'Criar Copa';
  listaEquipes: any;
  countSelecioandas: any;
  resultadoCopa: any
  exibirResultado:any;

  constructor(private copaServiceService:CopaServiceService, private toastr: ToastrService,
              private router: Router) {
    this.resgatarEquipes();
    this.countSelecioandas = 0;
    this.exibirResultado = false;
  }

  selecionarEquipe(equipe:any){
    if (this.countSelecioandas == 8 && !equipe.selecionada)
    {
      this.toastr.error("Só é possível selecionar 8 equipes.")
      return;
    }
    this.listaEquipes.forEach(element => {
      if (element.id == equipe.id)
        element.selecionada = !element.selecionada;

    });
    this.countSelecioandas = this.listaEquipes.filter(x=>x.selecionada).length;
  }

  resgatarEquipes(){
    this.copaServiceService.resgatarEquipes().then(data => {

      this.listaEquipes = data;
    }).catch(error => {
      this.toastr.error("Não foi possível resgatar as equipes.")
    });

  }

  gerarCopa(){
    if (this.countSelecioandas != 8)
    {
      this.toastr.error("A copa deve ser gerar com 8 equipes.")
      return;
    }

    this.copaServiceService.gerarCopa(this.listaEquipes.filter(x=>x.selecionada)).then(data => {
      this.resultadoCopa = data;
      this.exibirResultado = true;

    }).catch(error => {
      this.toastr.error("Não foi possível gerar a copa.")
    });


  }

  criarNovaCopa(){
    this.exibirResultado = false;
    this.countSelecioandas =0;
    this.resgatarEquipes();
  }


}
