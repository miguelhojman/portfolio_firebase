import { Component } from '@angular/core';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { HabilidadeditService } from 'src/app/serviciosedicion/habilidadedit.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent {
  habilidad: any; //al inicio se llena este array con las habilidades
  hab!: Habilidad;
  isLogged: boolean = true;
  nuevoId!: number;
  nuevoNombre: String = '';
  nuevoPorcentaje!: number;
  contador: number = 0;
  contador2: number = 0;

  constructor(
    public habilidadService: HabilidadService,
    public modoedit: ModoeditService,
    public editarHab: HabilidadeditService
  ) {}

  ngOnInit(): void {
    this.habilidadService.traerHabilidades().subscribe((data) => {
      this.habilidad = data;
    });
    this.modoedit.disparador.subscribe((data) => {
      this.isLogged = data;
    });
  }
  //metodo agregar
  agregar(): void {
    this.habilidad.forEach(
      (item: { porcentaje: number; nombreHabilidad: String; id: number }) => {
        if (item.nombreHabilidad == this.nuevoNombre) {
          this.contador2++;
          console.log(this.contador2);
        }
      }
    );
    if (this.contador2 != 0) {
      alert('La habilidad ya existe.Tal vez la quieras EDITAR');
      this.contador2 = 0;
      console.log(this.contador2);
    } else {
      this.hab = new Habilidad(
        this.habilidad.length,
        this.nuevoNombre,
        this.nuevoPorcentaje
      );
      this.editarHab.editar(this.hab).subscribe((data) => {
        this.hab = data;
        this.habilidadService.traerHabilidades().subscribe((data) => {
          this.habilidad = data;
        });
      });
    }
  }
  //metodo editar
  editar(): void {
    this.habilidad.forEach(
      (item: { porcentaje: number; nombreHabilidad: String; id: number }) => {
        if (item.nombreHabilidad == this.nuevoNombre) {
          this.hab = new Habilidad(
            item.id,
            item.nombreHabilidad,
            this.nuevoPorcentaje
          );
          this.contador++;
        }
      }
    );
    if (this.contador == 0) {
      alert('Habilidad no encontrada.Tal vez la quieres AGREGAR');
    } else {
      this.editarHab.editar(this.hab).subscribe((data) => {
        this.hab = data;
        this.habilidadService.traerHabilidades().subscribe((data) => {
          this.habilidad = data;
        });
      });
    }
  }
}
