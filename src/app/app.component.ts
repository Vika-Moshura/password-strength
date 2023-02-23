import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  constructor(
    private fb: FormBuilder,
  ) {

  }
  public formGroup!: FormGroup;
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      password: ['', Validators.required], 
    });
  }
}
