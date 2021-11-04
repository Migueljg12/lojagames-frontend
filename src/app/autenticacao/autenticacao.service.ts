import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(email: string, senha: string): Observable<HttpResponse<any>> {
    console.log(API);
    return this.http
      .post(
        `${API}/api/auth/signin`,
        {
          email: email,
          password: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authtoken: any = res.body ?? '';
          this.usuarioService.salvaToken(authtoken);
        })
      );
  }
}
