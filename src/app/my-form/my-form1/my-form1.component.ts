import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-my-form1',
  templateUrl: './my-form1.component.html',
  styleUrls: ['./my-form1.component.css']
})
export class MyForm1Component implements OnInit {

  topics: string[] = ["default", "Python", "Java", "C#"]

  selectHasError: boolean = false;

  u: User = new User("Nikhil", "a@a.com", "Python", "Morning", true)

  constructor() { }

  ngOnInit(): void {
  }

  onSelectChange(value: String) {
    if (value == "" || value == "default") {
      this.selectHasError = true;
    } else {
      this.selectHasError = false;
    }
  }
  onSubmit(myform: any) {
    console.log("AA", myform)
  }
}
