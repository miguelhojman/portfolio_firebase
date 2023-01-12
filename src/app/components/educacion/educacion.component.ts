import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  constructor(private servicioDatos:DatosService){}
  datosDelJson:any;

  ngOnInit(): void {
    
    this.servicioDatos.obtenerDatos().subscribe(data=>{
      this.datosDelJson=data;
    });
  }
}
