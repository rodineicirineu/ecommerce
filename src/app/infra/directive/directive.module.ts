import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnpjDirective } from './cnpj/cnpj.directive';
import { CpfDirective } from './cpf/cpf.directive';
import { PhoneMaskDirective } from './phone/phone-mask.directive';
import { FafwafaDirective } from './fafwafa.directive';



@NgModule({
  declarations: [	
    CpfDirective,
    PhoneMaskDirective,
    CnpjDirective,
      FafwafaDirective
   ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfDirective,
    PhoneMaskDirective,
    CnpjDirective,
  ]
})
export class DirectiveModule { }
