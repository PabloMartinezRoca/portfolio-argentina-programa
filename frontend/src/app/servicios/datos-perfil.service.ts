import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosPerfilService {
  constructor(private http: HttpClient) {}

  cargarDatos(): Observable<any> {
    return this.http.get('./assets/data/persona.json');
  }
}
