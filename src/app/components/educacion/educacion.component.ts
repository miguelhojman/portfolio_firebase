import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{  
  educacion:Educacion=new Educacion(1,'','','','','','','','','','','','','','',);
  //educacion1:any;
  constructor(public educacionService:EducacionService){};

  ngOnInit(): void {    
    this.educacionService.traerEducacion().subscribe(data=>{
      this.educacion=data;
    });
  }
}
