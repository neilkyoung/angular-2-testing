import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { RegisterForm }    from './register-form';

@Component({
  moduleId: module.id,
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html',
  styleUrls: ['register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
	public model = new RegisterForm( '', '', '' );
	public powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

	constructor() { 
		
	}

	ngOnInit() {
	
	}

	register() {
      console.log(this.model.username);
    }

    // TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.model); }

}
