import { Component, Input, OnInit } from '@angular/core';
import { Myname } from '../myname';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input("names") names: Myname[] = [] ;
  constructor() {

  }

  ngOnInit(): void {
  }

  addVote(name: String): void {
    let ind: number = this.names.findIndex( p => (p.name == name))
    this.names[ind].upVote = this.names[ind].upVote + 1;
    console.log(this.names)
  }

  downVote(name: String): void {
    let ind: number = this.names.findIndex( p => (p.name == name))
    this.names[ind].downVote = this.names[ind].downVote + 1;
    console.log(this.names)
  }

  add(p:Myname){
    this.names.push(p);
    
  }

}
