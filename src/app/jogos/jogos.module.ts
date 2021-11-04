import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogosRoutingModule } from './jogos-routing.module';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { JogoComponent } from './jogo/jogo.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradeInfoJogosComponent } from './grade-info-jogos/grade-info-jogos.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetalheJogoComponent } from './detalhe-jogo/detalhe-jogo.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoJogoComponent } from './novo-jogo/novo-jogo.component';

@NgModule({
  declarations: [
    ListaJogosComponent,
    JogoComponent,
    GradeInfoJogosComponent,
    CategoriesComponent,
    DetalheJogoComponent,
    NovoJogoComponent,
  ],
  imports: [CommonModule, JogosRoutingModule, CartaoModule, SharedModule],
})
export class JogosModule {}
