import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastroNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post(`${API}/api/user/create`, novoUsuario)
  }

  verificarCpfExiste(novoUsuario: string){
    return this.http.get(`${API}/api/user/exist?cpf=${novoUsuario}`)
  }

  verificarEmailExiste(novoUsuario: string){
    return this.http.get(`${API}/api/user/exist?email=${novoUsuario}`)
  }

}
