import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-hydrogen',
  templateUrl: './hydrogen.component.html',
  styleUrls: ['./hydrogen.component.css']
})
export class HydrogenComponent implements OnInit {
  Form = new FormGroup({
    carbon: new FormControl('',[Validators.required]),
    hydrogen: new FormControl('',[Validators.required]),
    oxygen: new FormControl('',[Validators.required]),
    sulphur: new FormControl('',[Validators.required])
  })
  gcv: any;
  constructor() { }

  ngOnInit(): void {
  }

  userArray:any={};
  submit=false;

  invalidData=false;
  validData=false;

  efficientFuel=false;
  notEfficientFuel=false;
  cornerCase=false;



  hydsubmit=false;
  invalidData2=false;

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

  hydrogen!: number;
  lcv!:number;
  add!: number;

  calculate(hcv:string,car:string,oxy:string,sul:string) {

    this.efficientFuel =  false;
    this.notEfficientFuel= false;
    this.cornerCase= false;

    this.hydrogen=(100*parseFloat(hcv)-8080*parseFloat(car)+4312.5*parseFloat(oxy)-2240*parseFloat(sul))/34500;
    this.validData=true;

    this.add=parseFloat(oxy)+parseFloat(car)+parseFloat(sul);
    if(this.add>100){
      this.invalidData=true;
    }


    if((parseFloat(hcv)>8500 && this.hydrogen>5) || (parseFloat(hcv)>8500 && parseFloat(oxy)>=1) || (parseFloat(hcv)>8500 && parseFloat(sul)>=0.5)){
      this.cornerCase=true;
    } else if(parseFloat(hcv)>8500){
      this.efficientFuel=true;
    } else if((parseFloat(car)>=75)&&(this.hydrogen<=5)&&(parseFloat(oxy)<=1)&&parseFloat(sul)<=0.5){
      this.efficientFuel=true;
    } else {
      this.notEfficientFuel=true;
    }


    // if((parseFloat(car)>=75)&&(this.hydrogen<=5)&&(parseFloat(oxy)<=1)&&parseFloat(sul)<=0.5){
    //   this.efficientFuel=true;
    // } else if(parseFloat(hcv)>8500 && this.hydrogen>=5){
    //   this.cornerCase=true;
    // } else {
    //   this.notEfficientFuel=true;
    // }
  }


  hydrogen2!: number;
  calc(gcv:string,ncv:string){

    this.hydrogen2=(parseFloat(gcv)-parseFloat(ncv))/52.83;
    this.hydsubmit=true;
    console.warn(this.gcv);

    if(parseFloat(gcv) < parseFloat(ncv)){
      this.invalidData2=true;
    }
  }
}
