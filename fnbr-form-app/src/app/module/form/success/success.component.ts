import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fnbr-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  fullName= '';

  constructor(private route: ActivatedRoute){}
  

  ngOnInit(): void {


    this.route.queryParams.subscribe(params=>this.fullName=params['name']!);


  }

}