import { Component } from '@angular/core';
import { UserLogin } from 'src/app/modelos/user-login';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-ventana-login',
  templateUrl: './ventana-login.component.html',
  styleUrls: ['./ventana-login.component.css']
})
export class VentanaLoginComponent {
seHaLogueado:boolean=false;
user:UserLogin=new UserLogin('user','1234');
  constructor(private loginService:LoginService){}

  
recibirLogin():void{
    this.loginService.enviarLogin(this.user).subscribe(data=>{
    this.seHaLogueado=data;
    console.log(data);
    })
  }
}

  
