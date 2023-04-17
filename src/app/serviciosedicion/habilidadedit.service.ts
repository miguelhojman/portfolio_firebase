import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidad } from '../modelos/habilidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class   HabilidadeditService {

  constructor(private http:HttpClient) { }

  public editar(h:Habilidad):Observable<Habilidad>{
    return this.http.put<Habilidad>("http://localhost:8080/modificarhabilidad",h);
  }
}
