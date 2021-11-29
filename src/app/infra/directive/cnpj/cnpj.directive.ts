import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appCnpj]'
})
export class CnpjDirective {
  constructor(public ngControl: NgControl) {}

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: any) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event: any) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event: any, backspace: any) {
    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 4) {
      newVal = newVal.replace(/^(\d{2})/, '$1.');
    } else if (newVal.length <= 8) {
      newVal = newVal.replace(/^(\d{2})(\d{3})/, '$1.$2.');
    } else if (newVal.length <= 12) {
      newVal = newVal.replace(/^(\d{2})(\d{3})(\d{3})/, '$1.$2.$3/');
    } else if (newVal.length <= 13) {
      newVal = newVal.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4-') 
    } else if (newVal.length <= 14) {
      newVal = newVal.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
    }
    else {
      newVal = newVal.substring(0, 14);
      newVal = newVal.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    this.ngControl.valueAccessor?.writeValue(newVal);
  }
}
