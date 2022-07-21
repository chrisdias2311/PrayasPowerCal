import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-carbon',
  templateUrl: './carbon.component.html',
  styleUrls: ['./carbon.component.css']
})
export class CarbonComponent implements OnInit {
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
  invalidData=false;

  efficientFuel=false;
  notEfficientFuel=false;
  cornerCase=false;

  userMessage(item:any){
    console.warn(item)
    this.userArray=item
    console.warn(this.Form)
    this.submit=true;
  }

  get cincomplete(){
    return this.Form.get('carbon')
  }
  get hincomplete(){
    return this.Form.get('hydrogen')
  }
  get oincomplete(){
    return this.Form.get('oxygen')
  }
  get sincomplete(){
    return this.Form.get('sulphur')
  }

  background:string = './assets/Background/Fuels1.jpg'


  // calculate(item:any){
  //   this.userArray=item
  //   this.hcv == this.userArray.carbon;
  //   console.warn(this.hcv);
  //   this.submit=true;
  // }

  carbon!: number;
  lcv!:number;
  add!: number;

  calculate(hcv:string,hyd:string,oxy:string,sul:string) {
    this.invalidData=false;

    this.efficientFuel =  false;
    this.notEfficientFuel= false;
    this.cornerCase= false;

    this.carbon=(100*parseFloat(hcv)-34500*parseFloat(hyd)+4312.50*parseFloat(oxy)-2240*parseFloat(sul))/8080;

    this.add=parseFloat(hyd)+parseFloat(oxy)+parseFloat(sul);
    if(this.add>100){
      this.invalidData=true;
    }





    if((parseFloat(hcv)>8500 && parseFloat(hyd)>5) || (parseFloat(hcv)>8500 && parseFloat(oxy)>=1) || (parseFloat(hcv)>8500 && parseFloat(sul)>=0.5)){
      this.cornerCase=true;
    } else if(parseFloat(hcv)>8500){
      this.efficientFuel=true;
    } else if((this.carbon>=75)&&(parseFloat(hyd)<=5)&&(parseFloat(oxy)<=1)&&parseFloat(sul)<=0.5){
      this.efficientFuel=true;
    } else {
      this.notEfficientFuel=true;
    }





    // if((this.carbon>=75)&&(parseFloat(hyd)<=5)&&(parseFloat(oxy)<=1)&&parseFloat(sul)<=0.5){
    //   this.efficientFuel=true;
    // } else if(parseFloat(hcv)>8500 && parseFloat(hyd)>=5){
    //   this.cornerCase=true;
    // } else {
    //   this.notEfficientFuel=true;
    // }
  }

}
