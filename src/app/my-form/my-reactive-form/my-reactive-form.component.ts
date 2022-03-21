import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { blue, confirmPasswordValidator, MyValidator } from './my-validator';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent implements OnInit {

  fg: FormGroup;
  /* = new FormGroup({
    username: new FormControl("pandey"),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    address:new FormGroup({
      city:new FormControl(""),
      state:new FormControl(""),
      country:new FormControl("")
    })
  })
 */
  constructor(fb: FormBuilder) {
    this.fg = fb.group({
      username: ["nikhil", Validators.required],
      password: ["aa", [Validators.required, Validators.minLength(3)]],
      confirmPassword: ["bb", [MyValidator.myValidation, blue("blue")]],
      address: fb.group({
        city: ["Kalyan"],
        state: ["maharashtra"],
        country: ["India"]
      }),
      additionalEmail: fb.array([]),
    }, { validator: confirmPasswordValidator });
    this.fg.get("username")?.errors
  }

  ngOnInit(): void {
    this.fg.valueChanges.subscribe(
      t => {
        if (t["address"]["city"] == t["address"]["state"]) {
          this.fg.setErrors({ "newError": true })
        }

      }
    )
  }

  add() {
    (this.fg.get("additionalEmail") as FormArray).push(new FormControl(""))
  }

  getFormArray(): FormArray {
    return this.fg.get('additionalEmail') as FormArray
  }

  loadApi(): void {
    //setValue is very strict to update all field
    //you can use patchValue to update few field
    this.fg.patchValue({
      username: "nikhil",
      password: "aa",
      confirmPassword: "bb",
      address: {
        city: "Kalyan",
        state: "maharashtra",
        country: "USA"
      }})
  }
}
