import { Component } from '@angular/core';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
habilidad:any;
isLogged:boolean=false;
constructor(public habilidadService:HabilidadService, public modoedit:ModoeditService){};

ngOnInit(): void {
  this.habilidadService.traerHabilidades().subscribe(data=>{
  this.habilidad=data;  
  })

  this.modoedit.disparador.subscribe(data=>{
    this.isLogged=data;
  })

  }
}


