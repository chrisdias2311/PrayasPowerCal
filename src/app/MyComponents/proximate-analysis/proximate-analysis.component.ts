import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-proximate-analysis',
  templateUrl: './proximate-analysis.component.html',
  styleUrls: ['./proximate-analysis.component.css']
})
export class ProximateAnalysisComponent implements OnInit {

  Form = new FormGroup({
    carbon: new FormControl('',[Validators.required]),
    hydrogen: new FormControl('',[Validators.required]),
    oxygen: new FormControl('',[Validators.required]),
    sulphur: new FormControl('',[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  userArray:any={};
  submit=false;

  moistureData=false;
  vmData=false;
  ashData=false;
  fcData=false;

  userMessage(item:any){
    console.warn(item)
    this.userArray=item
    console.warn(this.Form)
    this.submit=true;
  }

  moisture!: number;
  vm!:number;
  ash!: number;
  fc!:number;


  woc!: number;
  wm!:number;
  wvm!: number;
  wa!:number;

  calculate(wt1:string,wt2:string,wt3:string,wt4:string){
    this.woc=parseFloat(wt1);
    this.wm=parseFloat(wt2);
    this.wvm=parseFloat(wt3);
    this.wa=parseFloat(wt4);


    this.moistureData=true;
    this.vmData=true;
    this.ashData=true;
    this.fcData=true;


    this.moisture=((parseFloat(wt1)-parseFloat(wt2))/parseFloat(wt1))*100;
    this.vm=((parseFloat(wt2)-parseFloat(wt3))/parseFloat(wt1))*100;
    this.ash=(parseFloat(wt4)/parseFloat(wt1))*100;
    this.fc=100-(this.moisture+this.vm+this.ash);
  }
}
