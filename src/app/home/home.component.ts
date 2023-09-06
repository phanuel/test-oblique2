import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ObSpinnerService } from '@oblique/oblique';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	sampleChannel = 'demo';
	type = new UntypedFormControl('info');
	roleAlertControl = new UntypedFormControl();
	color: ThemePalette;

	profileForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl('')
	});

	constructor(private readonly spinnerService: ObSpinnerService) {
		this.spinnerService.activate(this.sampleChannel);
	}
}