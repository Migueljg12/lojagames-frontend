import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { Jogos } from '../jogos';
import { JogosService } from '../jogos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.css'],
})
export class ListaJogosComponent implements OnInit {
  jogos!: Jogos;
  teste!: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.jogos = this.activatedRoute.snapshot.data['jogos'];
    });
  }
}
