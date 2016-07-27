import { Directive } from '@angular/core';
import { Control, NG_VALIDATORS, Validator } from '@angular/common';

@Directive({
  selector: '[is-old-enough]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IsOldEnough, multi: true }]
})
export class IsOldEnough implements Validator {

	constructor() {  }

	validate(control: Control): any {
		console.log("Called");
		let birthDatePlus18 = new Date(control.value);
		birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
		return birthDatePlus18 < new Date() ? null : { tooYoung: true };
	}
}
