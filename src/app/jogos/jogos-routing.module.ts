import { NovoJogoComponent } from './novo-jogo/novo-jogo.component';
import { DetalheJogoComponent } from './detalhe-jogo/detalhe-jogo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { ListaJogosResolver } from './lista-jogos/lista-jogos.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaJogosComponent,
    resolve: {
      jogos: ListaJogosResolver,
    },
  },
  {
    path: 'novo',
    component: NovoJogoComponent,
  },
  {
    path: ':jogoId',
    component: DetalheJogoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogosRoutingModule {}
