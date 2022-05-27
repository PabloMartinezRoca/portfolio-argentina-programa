import { Component, OnInit } from '@angular/core';
import { DatosEducacionService } from 'src/app/servicios/datos-educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: any = {};

  constructor(private dadtosEducacion:DatosEducacionService) { }

  ngOnInit(): void {
    this.dadtosEducacion.obtenerDatos().subscribe(data => {
      this.educacion = data["educacion"];
    })
  }

}
