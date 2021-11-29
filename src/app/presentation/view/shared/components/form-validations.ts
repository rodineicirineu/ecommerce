
export class FormValidations {

  static getErrorMsg(fieldName: string, validatorName: string) {
    const config: any = {
      required: `Campo obrigatório.`
    };
    return config[fieldName];
  }
}
