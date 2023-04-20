import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoBorradoService {
  url: string = '';

  constructor(private http: HttpClient) {}

  public eliminar(id: number): Observable<Proyecto> {
    this.url = 'http://localhost:8080/borrarproyecto/' + id;
    return this.http.delete<Proyecto>(this.url);
  }
}
