import { Component } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  proyecto: any;
  isLogged:boolean=true;

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.proyectoService.traerProyectos().subscribe(data=>{
    this.proyecto=data;
    console.log(this.proyecto);  
    });

  }
}
