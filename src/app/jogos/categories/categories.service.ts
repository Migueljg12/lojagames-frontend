import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  buscaPorCategoria(id: string): Observable<any> {
    return this.http.get<any>(`${API}/api/category/search/${id}`);
  }
  atualizaCategoria(id: any, category: any): Observable<any> {
    console.log('Chegou até o metodo de atualizar!');
    return this.http.put<any>(`${API}/api/category/update?_id=${id}`, {
      category,
    });
  }
}
