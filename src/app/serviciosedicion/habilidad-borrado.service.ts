import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/habilidad';

@Injectable({
  providedIn: 'root',
})
export class HabilidadBorradoService {
  url: string = '';
  constructor(private http: HttpClient) {}

  public eliminar(id: number): Observable<Habilidad> {
    this.url = 'http://localhost:8080/eliminarhabilidad/' + id;
    return this.http.delete<Habilidad>(this.url);
  }
}
