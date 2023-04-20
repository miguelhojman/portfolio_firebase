import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educacion: Educacion = new Educacion(
    1,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  );
  isLogged: boolean = true;
  constructor(
    public educacionService: EducacionService,
    public modoedit: ModoeditService
  ) {}

  ngOnInit(): void {
    this.educacionService.traerEducacion().subscribe((data) => {
      this.educacion = data;
    });

    this.modoedit.disparador.subscribe((data) => {
      this.isLogged = data;
    });
  }
}
