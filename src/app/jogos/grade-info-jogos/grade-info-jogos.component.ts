import { Component, Input, OnInit } from '@angular/core';
import { Jogos } from '../jogos';
import { JogosService } from '../jogos.service';

@Component({
  selector: 'app-grade-info-jogos',
  templateUrl: './grade-info-jogos.component.html',
  styleUrls: ['./grade-info-jogos.component.css'],
})
export class GradeInfoJogosComponent implements OnInit {
  @Input() jogos!: Jogos;

  @Input() categories!: any;

  teste!: any;

  constructor(private jogoServ: JogosService) {}

  ngOnInit(): void {}
}
