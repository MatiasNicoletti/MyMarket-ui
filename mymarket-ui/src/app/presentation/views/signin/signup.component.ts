import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {
  isLinear=false;
  userFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.userFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
