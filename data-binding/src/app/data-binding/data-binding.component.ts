import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/400/200/nature';

  valorAtual: string = '';

  nome:string = 'abc';

  pessoa = {
    nome: 'def',
    idade: 20
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado() {
    alert('Botao clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.nome = ((<HTMLInputElement>evento.target).value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
