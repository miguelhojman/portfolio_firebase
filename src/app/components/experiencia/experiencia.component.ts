import { Component, OnInit  } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  constructor(private servicioDatos:DatosService){}
  datosDelJson:any;

  ngOnInit(): void {
    
    this.servicioDatos.obtenerDatos().subscribe(data=>{
      this.datosDelJson=data;
    });
  }
}
