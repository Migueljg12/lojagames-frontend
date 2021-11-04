import { JogosService } from './../jogos.service';
import { Jogo } from './../jogos';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-jogo',
  templateUrl: './detalhe-jogo.component.html',
  styleUrls: ['./detalhe-jogo.component.css'],
})
export class DetalheJogoComponent implements OnInit {
  jogoId!: any;
  jogos!: Observable<Jogo>;

  constructor(
    private jogoService: JogosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jogoId = this.activatedRoute.snapshot.params.jogoId;
    this.jogos = this.jogoService.buscarPorId(this.jogoId);
  }

  excluir() {
    this.jogoService.excluirJogo(this.jogoId).subscribe(
      () => {
        this.router.navigate(['/jogos/']);
      },
      (error) => console.log(error)
    );
  }
}
