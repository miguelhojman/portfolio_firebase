import { Component } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  persona:Persona=new Persona('','','','','','','','','','','','','');
  isLogged:boolean=false;

  constructor(public personaService:PersonaService,public modoedit:ModoeditService){}

  ngOnInit(): void {
      this.personaService.traerPersona().subscribe(data=>{
      this.persona=data;
      })

      this.modoedit.disparador.subscribe(data=>{
        this.isLogged=data;
      })
  }

  recargar():void{
    window.location.reload();
  }

  


}
