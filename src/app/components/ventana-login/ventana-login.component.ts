import { Component } from '@angular/core';
import { ModalService } from 'src/app/servicios/modal.service';

@Component({
  selector: 'app-ventana-login',
  templateUrl: './ventana-login.component.html',
  styleUrls: ['./ventana-login.component.css']
})
export class VentanaLoginComponent {
validacion:boolean=false;
visible:boolean=true;
constructor(private servicio:ModalService){}

trabajoBoton(inputUser:string, inputPass:string){
if(inputUser==="miguel" && inputPass==="1234"){
  this.validacion=true;
}
  this.servicio.disparador.emit(this.validacion);
  this.visible=false;
}
}