export class Perfil {
  nombre: string;
  apellido: string;
  fechaNacimiento: String;
  contactoEmail: string;
  url: string;
  titulosAcademicos: [
    {
      nombre: String;
    }
  ];

  constructor(
    nombre: string,
    apellido: string,
    fechaNacimiento: String,
    contactoEmail: string,
    url: string,
    titulosAcademicos: [
      {
        nombre: String;
      }
    ]
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.contactoEmail = contactoEmail;
    this.url = url;
    this.titulosAcademicos = titulosAcademicos;
  }
}

