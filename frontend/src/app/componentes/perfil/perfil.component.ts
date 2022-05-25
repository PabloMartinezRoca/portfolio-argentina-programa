import { Component, OnInit } from '@angular/core';
import { DatosPerfilService } from 'src/app/servicios/datos-perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  perfil: any = {};

  constructor(private datosPerfil: DatosPerfilService) {}

  ngOnInit(): void {
    this.datosPerfil.cargarDatos().subscribe((data) => {
      this.perfil = data["persona"];
    });
  }
}
