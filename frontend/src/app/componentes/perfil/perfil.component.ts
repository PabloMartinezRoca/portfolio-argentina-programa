import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Perfil } from 'src/app/entidades/perfil';
import { DatosPerfilService } from 'src/app/servicios/datos-perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css', '../../estilos-compartidos/forms.css'],
})
export class PerfilComponent implements OnInit {
  perfil: any = {};

  usuarioAutenticado: boolean = true;

  form!: FormGroup;

  constructor(
    private datosPerfil: DatosPerfilService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.datosPerfil.cargarDatos().subscribe((data) => {
      this.perfil = data["perfil"];
      console.log(this.perfil.nombre);
    });

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fechaNacimiento: ['', Validators.required],
      contactoEmail: ['', [Validators.required, Validators.email]],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  guardarPerfil() {
    if (this.form.valid) {
      let nuevosDatosPerfil = new Perfil (
        this.form.controls['nombre'].value,
        this.form.controls['apellido'].value,
        this.form.controls['fechaNacimiento'].value,
        this.form.controls['contactoEmail'].value,
        this.form.controls['url'].value,
        this.perfil.titulosAcademicos
      );
      
      this.datosPerfil.guardarDatos(nuevosDatosPerfil).subscribe(
        (data) => {
          alert('Los datos se modificaron con éxito.');

          this.perfil = nuevosDatosPerfil;

          this.form.reset();
          document.getElementById('btnCerrarModalFormPerfil')?.click();
        },
        (error) => {
          alert(
            'Ha ocurrido un error al actualizar los datos. Por favor, reintente.<br />Si el problema persiste, contacte al administrador.'
          );
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }

  cargarDatosActualesAlFormulario() {
    this.form.get('nombre')?.setValue(this.perfil.nombre);
    this.form.get('apellido')?.setValue(this.perfil.apellido);
    this.form.get('fechaNacimiento')?.setValue(this.perfil.fechaNacimiento);
    this.form.get('contactoEmail')?.setValue(this.perfil.contactoEmail);
    this.form.get('url')?.setValue(this.perfil.url);
  }

  resetForm() {
    // Limpia los mensajes de error
    this.form.reset();
  }

  // Getters and Setters
  get nombre() {
    return this.form.get('nombre');
  }

  get apellido() {
    return this.form.get('apellido');
  }

  get fechaNacimiento() {
    return this.form.get('fechaNacimiento');
  }

  get contactoEmail() {
    return this.form.get('contactoEmail');
  }

  get url() {
    return this.form.get('url');
  }
}
