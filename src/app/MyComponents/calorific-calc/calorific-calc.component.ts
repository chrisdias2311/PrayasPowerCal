import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-calorific-calc',
  templateUrl: './calorific-calc.component.html',
  styleUrls: ['./calorific-calc.component.css']
})
export class CalorificCalcComponent implements OnInit {
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

  hcv!: number;
  lcv!:number;
  add!: number;

  calculate(car:string,hyd:string,oxy:string,sul:string) {
    this.hcv=0.01*(8080*parseFloat(car)+34500*(parseFloat(hyd)-parseFloat(oxy)/8)+2240*parseFloat(sul));
    this.lcv=this.hcv-(0.09*parseFloat(hyd)*587);

    this.add=parseFloat(car)+parseFloat(hyd)+parseFloat(oxy)+parseFloat(sul);
    if(this.add>100){
      this.invalidData=true;
    }
  }
}
