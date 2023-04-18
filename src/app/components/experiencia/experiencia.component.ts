import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { ExperienciaeditService } from 'src/app/serviciosedicion/experienciaedit.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  experiencia: any;
  isLogged: boolean = true;
  nuevaEmpresa: String = '';
  nuevoRubro: String = '';
  nuevoPeriodo: String = '';
  nuevaTarea: String = '';
  exp!: Experiencia;
  nuevoId!: number;
  contador: number = 0;
  contador2: number = 0;
  contador3: number = 0;
  idEliminar: number = 0;

  constructor(
    private experienciaService: ExperienciaService,
    private modoedit: ModoeditService,
    private editarExp: ExperienciaeditService
  ) {}

  ngOnInit(): void {
    this.experienciaService.traerExperiencias().subscribe((data) => {
      this.experiencia = data;
      //console.log(this.experiencia);
    });

    this.modoedit.disparador.subscribe((data) => {
      this.isLogged = data;
    });
  }
  //metodo edicion-----------------------------------
  editar(): void {}
  //metodo agregar-------------------------------------
  agregar(): void {
    this.experiencia.forEach((x: { empresa: String }) => {
      if (x.empresa == this.nuevaEmpresa) {
        this.contador2++;
      }
    });
    if (this.contador2 != 0) {
      alert('La experiencia ya existe.Tal vez la quieras EDITAR');
      this.contador2 = 0;
    } else {
      this.exp = new Experiencia(
        this.nuevoId,
        this.nuevaEmpresa,
        this.nuevoRubro,
        this.nuevoPeriodo,
        this.nuevaTarea
      );
      console.log(this.exp);
      this.editarExp.editar(this.exp).subscribe((data) => {
        this.exp = data;
        console.log(data);
        this.experienciaService.traerExperiencias().subscribe((data) => {
          this.experiencia = data;
        });
      });
    }
  }
  //metodo eliminar-----------------------------------
  eliminar(): void {}
}
