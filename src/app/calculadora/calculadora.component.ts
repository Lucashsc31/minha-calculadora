import { Component } from '@angular/core';

import { CalculadoraService } from './calculadora.service'

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{
  //teste: any
  num: string[]
  ope: string[]

  constructor(
    private calculadoraService: CalculadoraService
  ) { 
    //this.teste = this.calculadoraService.teste("1+2")
  }

}
