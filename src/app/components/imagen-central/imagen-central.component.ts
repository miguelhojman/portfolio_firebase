import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-imagen-central',
  templateUrl: './imagen-central.component.html',
  styleUrls: ['./imagen-central.component.css']
})
export class ImagenCentralComponent implements OnInit {
  constructor(private servicioDatos:DatosService){}

  datosDelJson:any;

  ngOnInit(): void {
    
    this.servicioDatos.obtenerDatos().subscribe(data=>{
      this.datosDelJson=data;
    });
  }

}
