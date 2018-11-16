import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit{
  year: number;
  month: number;

  constructor(private activatedroute: ActivatedRoute, private route: Router){}

  ngOnInit(){
   // console.log("archive onInit")
   // this.activatedroute.paramMap
   //  .subscribe(params =>{
   //     this.year = +params.get('year');
   //     this.month = +params.get('month');
   //  })

	  let params = this.activatedroute.snapshot.paramMap;
	  this.year = +params.get('year');
	  this.month = +params.get('month');
  }

  submit(){
    this.route.navigate([''])
  }
}
