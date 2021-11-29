import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations';


@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styleUrls: ['./msg-error.component.scss']
})
export class MsgErrorComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return FormValidations.getErrorMsg(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }

    return null;
  }

}
