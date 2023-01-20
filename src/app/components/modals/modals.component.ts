import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/servicios/modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
estadoVerde:boolean=false;
estadoRojo:boolean=false;
validacion:boolean=false;

constructor(private servicio:ModalService){}

ngOnInit(): void {
  this.estadoVerde=false;  
  this.estadoRojo=false;
  this.validacionFn();
}
cerrar(){
  this.estadoVerde=false;  
  this.estadoRojo=false;
  //esto funciona:
  //location.reload();   
}  

validacionFn(){
  this.servicio.disparador.subscribe(data=>{
    this.validacion=data;
    console.log('validacion:'+this.validacion);
    this.cambioVentanas();
 });
}
cambioVentanas(){
  if(this.validacion){
    this.estadoVerde=true;  
    this.estadoRojo=false;    
   }else{
    this.estadoVerde=false;  
    this.estadoRojo=true;
   }
}
}
 
 
  
