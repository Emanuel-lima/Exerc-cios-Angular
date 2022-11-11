import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  ra : number;
  nome : string;
  email: string;
  celular: number;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log("salvou");
  }
}
