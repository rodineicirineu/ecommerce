import { NgControl } from '@angular/forms';
import { CnpjDirective } from './cnpj.directive';

let formControlSpy: jasmine.SpyObj<NgControl>;
formControlSpy = jasmine.createSpyObj('NgControl', ['value']);

beforeEach(() => formControlSpy.value.and.returnValue('value'));

describe('CnpjDirective', () => {
  const directive = new CnpjDirective(formControlSpy);
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
