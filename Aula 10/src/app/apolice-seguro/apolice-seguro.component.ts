import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent implements OnInit {
  nome : string;
  sexo : string;
  idade : number;
  valor : number;
  resultado : number;
  constructor() { }

  ngOnInit(): void {
  }

  calcularApolice(){
    if (this.sexo =="masculino"){
      if(this.idade<=25){
        this.resultado = (this.valor*0.15)
      }
      else this.resultado = (this.valor*0.10)
    }
    else this.resultado = (this.valor*0.08)
  }
}