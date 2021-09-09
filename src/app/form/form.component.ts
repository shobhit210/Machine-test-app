import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fname=""
  email=""
  num=""

  registerForm = this.fb.group({
    fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    num: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    if (this.registerForm.valid){
      this.router.navigateByUrl("display")
    } else {
      alert("Invalid Form")
    }
  }

}
