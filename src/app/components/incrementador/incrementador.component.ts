import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  {

  @Input('valor') progreso: number = 40;
  @Output() valor:EventEmitter<number> = new EventEmitter();

  
  cambiarValor(valor: number) {
  
    if(this.progreso >= 100 && valor >=0){
      this.valor.emit(100);
      return this.progreso = 100;
    }
    if(this.progreso <= 0 && valor < 0 ){
      this.valor.emit(0);
      return this.progreso = 0
    }
    this.valor.emit(this.progreso);
    this.progreso = this.progreso + valor;
  }

  onChange(nuevoValor: number){
    if(nuevoValor >= 100){
      this.progreso = 100;
    }else if( nuevoValor <= 0)
    {
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }
    this.valor.emit(this.progreso);
  }

}
