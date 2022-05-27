import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../entidades/perfil';

@Injectable({
  providedIn: 'root',
})
export class DatosPerfilService {
  constructor(private http: HttpClient) {}

  cargarDatos(): Observable<any> {
    // Carga datos desde un JSON estático
    // return this.http.get('./assets/data/perfil.json');

    // Carga datos desde un JSON Server
    return this.http.get('http://localhost:3000/db');
  }

  guardarDatos(perfil:Perfil): Observable<any> {
    return this.http.post('http://localhost:3000/perfil', perfil);
  }
}
