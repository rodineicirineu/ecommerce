import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) {}

   buscar(cep: string) {
     return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
   }

   mascara_cpf() {
    var cpf = document.getElementById('cpf') as HTMLInputElement;
    if (cpf.value.length == 3 || cpf.value.length == 7) {
      cpf.value += "."
    } else if (cpf.value.length == 11) {
      cpf.value += "-"
    }
  }
}
