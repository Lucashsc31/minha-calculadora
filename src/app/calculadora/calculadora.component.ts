import { Component } from '@angular/core';

import { CalculadoraService } from './calculadora.service'

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{
  teste: any
  constructor(
    private calculadoraService: CalculadoraService
  ) { 
    this.teste = this.calculadoraService.teste()
  }

}
