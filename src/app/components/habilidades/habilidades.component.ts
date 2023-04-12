import { Component } from '@angular/core';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
habilidad:any;
isLogged:boolean=true;
constructor(public habilidadService:HabilidadService){};

ngOnInit(): void {
  this.habilidadService.traerHabilidades().subscribe(data=>{
  this.habilidad=data;  
  });

  }
}


