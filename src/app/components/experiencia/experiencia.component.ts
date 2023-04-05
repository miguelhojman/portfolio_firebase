import { Component, OnInit  } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia:any;
  constructor(private experienciaService: ExperienciaService){}

  ngOnInit(): void {
    this.experienciaService.traerExperiencias().subscribe(data=>{
      this.experiencia=data;
      console.log(data);
    }
      );
   
  }
}
