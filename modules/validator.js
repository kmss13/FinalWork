'use strict'
class Validator {
  constructor(form) {
    this.patterns = {
      name: /^[a-za-яё]+$/i,
      phone: /^\+? (\d{ 1, 3 })?[- .] ?\(? (?: \d{ 2, 3 }) \)?[- .] ?\d\d\d[- .] ?\d\d\d\d$ /,
      email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
      
      
    };
    this.errors = {
      name: "Имя содержит не только буквы",
      phone: "Телефон должен выглядеть как +7(000)000-0000",
      email: "e-mail выглядит как mymail@mail.ru",
      
    };
    this.errorClass = 'error-msg';
    this.form = form;
    this.valid = false;
    this._validateForm();
  }
  validate(regexp, value) {
    regexp.test(value)
  }


}