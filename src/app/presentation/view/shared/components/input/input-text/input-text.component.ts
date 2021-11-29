import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputTextComponent),
  multi: true
};

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputTextComponent implements ControlValueAccessor  {
  @Input() placeHolder!: string;
  @Input() label: any;
  @Input() formulario!: FormGroup;
  @Input() control!: any;
  @Input() keyUp: any
  @Input() directive: any;

  constructor() { }

  private innerValue: any;
  public touched!: () => void;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue(v: any): void {
    this.value = v;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
}
