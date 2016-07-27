import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { RegisterForm }    from './register-form';
import { IsOldEnough } from './is-old-enough.directive';

@Component({
  moduleId: module.id,
  selector: 'app-register-form',
  directives: [IsOldEnough],
  templateUrl: 'register-form.component.html',
  styleUrls: ['register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
	public model = new RegisterForm( '', '', '', '' );
	public powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

	active = true;

	submitted = false;

	reset() {
		this.model = new RegisterForm('', '', '', '');
		this.active = false;
		setTimeout(() => this.active = true, 0);
	}

	constructor() { 

	}

	ngOnInit() {
	
	}

	register() {
      console.log(this.model.username);
      this.submitted = true;
      //this.reset()
    }

    // TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.model); }

}
