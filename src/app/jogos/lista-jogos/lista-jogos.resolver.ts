import { switchMap } from 'rxjs/operators';
import { JogosService } from './../jogos.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Jogos } from '../jogos';

@Injectable({
  providedIn: 'root',
})
export class ListaJogosResolver implements Resolve<Jogos> {
  constructor(
    private jogoService: JogosService,
    private userService: UsuarioService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Jogos> {
    return this.jogoService.listaDoUsuario();
  }
}
