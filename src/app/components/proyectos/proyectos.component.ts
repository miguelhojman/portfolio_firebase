import { Component } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  proyecto: any;
  isLogged: boolean = true;

  constructor(
    private proyectoService: ProyectoService,
    public modoedit: ModoeditService
  ) {}

  ngOnInit(): void {
    this.proyectoService.traerProyectos().subscribe((data) => {
      this.proyecto = data;
    });

    this.modoedit.disparador.subscribe((data) => {
      this.isLogged = data;
    });
  }
}
