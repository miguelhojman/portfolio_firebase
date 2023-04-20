export class Proyecto {
  id: number;
  imagen: String;
  titulo: String;
  subtitulo: String;
  descripcion: String;
  enlace: String;

  constructor(
    id: number,
    imagen: String,
    titulo: String,
    subtitulo: String,
    descripcion: String,
    enlace: String
  ) {
    this.id = id;
    this.imagen = imagen;
    this.titulo = titulo;
    this.subtitulo = subtitulo;
    this.descripcion = descripcion;
    this.enlace = enlace;
  }
}
