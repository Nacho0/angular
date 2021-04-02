import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  alumno = null;

  alu = {
    codigo: null,
    nombre: null,
    carrera: null,
    correo: null
  }

  constructor(private alumnoServicio: AlumnoService) { }

  ngOnInit() {
    this.mostrarTodos();
  }

  mostrarTodos() {
    this.alumnoServicio.mostrarTodos().subscribe(result => this.alumno = result);
  }

  insertar() {
    this.alumnoServicio.insertar(this.alu).subscribe(datos => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.mostrarTodos();
      }
    });
  }

  eliminar(codigo) {
    if (confirm('¿Realmente desea eliminar?')) {
      this.alumnoServicio.eliminar(codigo).subscribe(datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.mostrarTodos();
        }
      });
    }
  }

  modificar() {
    console.log(this.alu);
    this.alumnoServicio.modificar(this.alu).subscribe(datos => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.mostrarTodos();
      }
    });
  }

  seleccionar(codigo) {
    this.alumnoServicio.seleccionar(codigo).subscribe(result => this.alu = result[0]);
  }

  hayRegistros() {
    return true;
  }

}