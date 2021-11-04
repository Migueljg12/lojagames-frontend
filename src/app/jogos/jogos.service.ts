import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Jogo, Jogos } from './jogos';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class JogosService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listaDoUsuario(): Observable<Jogos> {
    return this.http.get<Jogos>(`${API}/api/game/search`);
  }
  importCategory(_id: any): Observable<any> {
    return this.http.get(`${API}/api/category/search/${_id}`);
  }

  buscarPorId(id: any): Observable<Jogo> {
    return this.http.get<Jogo>(`${API}/api/game/search/${id}`);
  }

  excluirJogo(id: any): Observable<Jogo> {
    return this.http.delete<Jogo>(`${API}/api/game/delete/${id}`);
  }

  uploadJogo(
    gameName: string,
    category: string,
    stock: number,
    description: string,
    price: string
  ): Observable<Jogo> {
    const body = { gameName, category, stock, description, price };
    console.log(body);
    return this.http.post<Jogo>(`${API}/api/game/create`, body);
  }
}
