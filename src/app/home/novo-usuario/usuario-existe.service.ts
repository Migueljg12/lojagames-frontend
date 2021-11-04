import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { first, map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  emailJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap(nomeUsuario => {
          return this.novoUsuarioService.verificarEmailExiste(nomeUsuario)}
        ),
        map(usuarioExiste => {
          console.log(usuarioExiste)
         return usuarioExiste ? { usuarioExistente: true } : null}),
         first()
      )
    }
  }

  cpfJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap(nomeUsuario => {
          return this.novoUsuarioService.verificarCpfExiste(nomeUsuario)}
        ),
        map(usuarioExiste => {
          console.log(usuarioExiste)
         return usuarioExiste ? { usuarioExistente: true } : null}),
         first()
      )
    }
  }
}
