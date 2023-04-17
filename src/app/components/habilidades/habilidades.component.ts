import { Component } from '@angular/core';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { HabilidadeditService } from 'src/app/serviciosedicion/habilidadedit.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
habilidad:any;//al inicio se llena este array con las habilidades
hab!:Habilidad;
isLogged:boolean=true;
nuevoId:number=0;
nuevoNombre:String='Habilidad a agregar';
nuevoPorcentaje:number=0;

constructor(public habilidadService:HabilidadService,
            public modoedit:ModoeditService,
            public editarHab:HabilidadeditService){};

ngOnInit(): void {
  this.habilidadService.traerHabilidades().subscribe(data=>{
  this.habilidad=data;  
  })
  this.modoedit.disparador.subscribe(data=>{
    this.isLogged=data;
  })
  }
  //metodo agregar
  agregar():void{    
    this.hab=new Habilidad(this.nuevoId,this.nuevoNombre,this.nuevoPorcentaje);
    this.editarHab.editar(this.hab).subscribe(data=>{
      this.hab=data; 
    this.habilidadService.traerHabilidades().subscribe(data=>{
      this.habilidad=data; 
      }) 
    });
  }
  //metodo editar
  editar():void{    
      this.habilidad.forEach((item: { id: number; nombreHabilidad: String; }) => {
          if(item.id==this.nuevoId){
            this.hab=new Habilidad(item.id,item.nombreHabilidad,this.nuevoPorcentaje);
          } }  ) 
    this.editarHab.editar(this.hab).subscribe(data=>{
      this.hab=data; 
    this.habilidadService.traerHabilidades().subscribe(data=>{
      this.habilidad=data; 
      }) 
    });
    }
    }





