import { Component, OnInit } from '@angular/core';
import { Filme, Genero, FilmeService } from '../filme.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  filme: Filme;
  generos: Array<Genero>;



  constructor(
    public filmeservice: FilmeService
  ) { }

  ngOnInit() {
    this.filme = new Filme();
    this.generos = this.filmeservice.listarGeneros();
  }

}
