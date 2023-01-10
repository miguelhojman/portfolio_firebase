import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana-login',
  templateUrl: './ventana-login.component.html',
  styleUrls: ['./ventana-login.component.css']
})
export class VentanaLoginComponent {

constructor(){}

getInputValue(inputUser:string, inputPass:string){
  console.log(inputUser,'+',inputPass);
if(inputUser==="miguel"&&inputPass==="1234"){
  alert('BIENVENIDO');

}
else{
  alert('Acceso Denegado');
}

}

}