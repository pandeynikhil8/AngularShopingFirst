import { Component, OnInit } from '@angular/core';
import { Myname } from './myname';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  names: Myname[] = [
    { name: "Nikhil", upVote: 1, downVote: 2 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  add(p:string){
    console.log(this.names) 
    this.names.push({"name":p,"upVote":1,"downVote":1});
    console.log(this.names) 
  }
}
