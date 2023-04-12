import { Component, OnInit  } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia:any;
  isLogged:boolean=false;
  constructor(private experienciaService: ExperienciaService,public modoedit:ModoeditService){}

  ngOnInit(): void {
    this.experienciaService.traerExperiencias().subscribe(data=>{
      this.experiencia=data;
    }
      );

      this.modoedit.disparador.subscribe(data=>{
        this.isLogged=data;
      })
   
  }
}
