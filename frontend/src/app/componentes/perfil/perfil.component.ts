import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private datosPerfil: DatosPerfilService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.datosPerfil.cargarDatos().subscribe((data) => {
      this.perfil = data['persona'];
    });

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fechaNacimiento: [''],
      contactoEmail: ['', [Validators.required,Validators.email]],
      url:['', [Validators.required,Validators.pattern('https?://.+')]]
    })
  }

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

  guardarPerfil() {
    if (this.form.valid)
    {
      //llamar a un servicio para enviar los datos
    }
    else
    {
      this.form.markAllAsTouched();
    }
  }
}


