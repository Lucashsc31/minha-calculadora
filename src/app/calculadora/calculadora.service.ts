import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  constructor() { }

  teste(conta){
    return eval(conta)
  }

}
