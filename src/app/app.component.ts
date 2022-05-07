import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      first_name: ['trilok'],
      last_name: ['singh']
    });
  }
}
