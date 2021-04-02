import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  url = 'http://localhost/angularphp/';

  constructor(private http: HttpClient) { }

  mostrarTodos() {
    return this.http.get(`${this.url}mostrarTodos.php`);
  }

  insertar(alumno) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(alumno));
  }

  eliminar(codigo: number) {
    return this.http.get(`${this.url}eliminar.php?codigo=${codigo}`);
  }

  seleccionar(codigo: number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificar(alumno) {
    return this.http.post(`${this.url}modificar.php`, JSON.stringify(alumno));
  }
}
