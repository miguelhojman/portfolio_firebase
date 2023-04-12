import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-imagen-central',
  templateUrl: './imagen-central.component.html',
  styleUrls: ['./imagen-central.component.css']
})
export class ImagenCentralComponent implements OnInit {  
  persona:Persona=new Persona('','','','','','','','','','','','','');
  isLogged:boolean=false;

  constructor(public personaService:PersonaService,public modoedit:ModoeditService){}

  ngOnInit(): void {
      this.personaService.traerPersona().subscribe(data=>{
      this.persona=data;
      }
    )

    this.modoedit.disparador.subscribe(data=>{
      this.isLogged=data;
    })

   }
  }


