import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  disparador:EventEmitter<any>=new EventEmitter();

  constructor() { }
}
