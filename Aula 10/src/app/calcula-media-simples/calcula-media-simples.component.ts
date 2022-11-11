import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-media-simples',
  templateUrl: './calcular-media-simples.component.html',
  styleUrls: ['./calcular-media-simples.component.css']
})
export class CalcularMediaComponent implements OnInit {
  ac1 : number;
  ac2 : number;
  ag : number;
  af : number;
  resultado : number;
  situacao: string;
  constructor() { }

  ngOnInit(): void {
  }

  calcularmedia(){
    this.resultado = (this.ac1*0.15) + (this.ac2*0.30) + (this.ag*0.10) + (this.af*0.45);
    if (this.resultado<5)
    this.situacao = "reprovado";
    else this.situacao="aprovado";
  }

}
