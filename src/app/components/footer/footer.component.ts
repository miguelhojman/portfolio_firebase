import { Component } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  persona:Persona=new Persona('','','','','','','','','','','','','');
  isLogged:boolean=true;
  editarSeccion:boolean=true;
  nuevoFooter1:String='';
  nuevoFooter2:String='';
  cerrarModal:String='';    

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
    
    actualizar():void{
        console.log(this.nuevoFooter1+'  + '+this.nuevoFooter2);
        this.cerrarModal='modal';

   }
}
