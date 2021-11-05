import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  @ViewChild(NavbarComponent) childComponentData;
  postTwit  : FormGroup;
  data=[];
  data1:any[];
  tweet = "";
  searchedKeyword;

  constructor(
    private dataService: DataServiceService,
    private fb: FormBuilder,
    ) {
    
    this.postTwit = this.fb.group({
      twit:['',Validators.required],
    });
   }

  ngOnInit() {
    // console.log('DATATAAAA',this.data);
    this.data1  =  this.dataService.getData();
  }

  insert(value)
  {
    console.log("valueeeee",value);
    var res = [];
    localStorage.setItem("data", JSON.stringify(value));
    res =  JSON.parse(localStorage.getItem("data"));
    console.log("ddddd",this.data);
    for (var x in res){
      res.hasOwnProperty(x) && this.data.push(res);
    }
    
    this.data = this.data.reverse(); 
    console.log("Reversed array is : " + this.data );

    this.postTwit.reset();
    
    console.log("dasasasas",res);
  }

}
