export class Educacion{
    id?:number;
    sec1:String;
    sec1Descripcion:String;
    sec2:String;
    sec2Descripcion:String;
    univ1:String;
    univ1Descripcion:String;
    univ2:String;
    univ2Descripcion:String;
    curso1:String;
    curso1Descripcion:String;
    curso2:String;
    curso2Descripcion:String;
    curso3:String;
    curso3Descripcion:String;

    constructor(id:number,sec1:String,sec1Descripcion:String,sec2:String,sec2Descripcion:String,
                univ1:String,univ1Descripcion:String,univ2:String,univ2Descripcion:String,
                curso1:String,curso1Descripcion:String,curso2:String,curso2Descripcion:String,
                curso3:String,curso3Descripcion:String){

        this.id=id;
        this.sec1=sec1;
        this.sec2=sec2;
        this.sec1Descripcion=sec1Descripcion;
        this.sec2Descripcion=sec2Descripcion;
        this.univ1=univ1;
        this.univ2=univ2;
        this.univ1Descripcion=univ1Descripcion;
        this.univ2Descripcion=univ2Descripcion;
        this.curso1=curso1;
        this.curso2=curso2;
        this.curso3=curso3;
        this.curso1Descripcion=curso1Descripcion;
        this.curso2Descripcion=curso2Descripcion;
        this.curso3Descripcion=curso3Descripcion;
    }
}