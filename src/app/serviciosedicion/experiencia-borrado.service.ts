import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../modelos/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaBorradoService {
  url: string = '';

  constructor(private http: HttpClient) {}

  public eliminar(id: number): Observable<Experiencia> {
    this.url = `http://localhost:8080/borrarexperiencia/${id}`;
    return this.http.delete<Experiencia>(this.url);
  }
}
