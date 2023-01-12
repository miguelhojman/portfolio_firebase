import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  constructor(private servicioDatos:DatosService){}

  datosDelJson:any;

  ngOnInit(): void {
    
    this.servicioDatos.obtenerDatos().subscribe(data=>{
      this.datosDelJson=data;
    });
  }
}
