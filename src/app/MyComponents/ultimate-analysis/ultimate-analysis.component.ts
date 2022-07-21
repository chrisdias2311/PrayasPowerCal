import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ultimate-analysis',
  templateUrl: './ultimate-analysis.component.html',
  styleUrls: ['./ultimate-analysis.component.css']
})
export class UltimateAnalysisComponent implements OnInit {

  Form = new FormGroup({
    carbon: new FormControl('', [Validators.required]),
    hydrogen: new FormControl('', [Validators.required]),
    oxygen: new FormControl('', [Validators.required]),
    sulphur: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  userArray: any = {};
  submit = false;
  data = false;

  userMessage(item: any) {
    console.warn(item)
    this.userArray = item
    console.warn(this.Form)
    this.submit = true;
  }


  carbon!: number;
  hydrogen!: number;
  nitrogen!: number;
  sulphur!: number;


  kohc: number=0;
  caclc!: number;
  volc!: number;
  norc!: number;
  baso4c!: number;
  woc!: number;






  calculate(kohx: string, caclx: string, volx: string, norx: string, baso4x: string, coalx: string) {

    this.kohc = parseFloat(kohx);
    this.caclc = parseFloat(caclx);
    this.volc = parseFloat(volx);
    this.norc = parseFloat(norx);
    this.baso4c = parseFloat(baso4x);
    this.woc = parseFloat(coalx);




    this.carbon = (parseFloat(kohx) * 12 * 100) / (parseFloat(coalx) * 44);

    this.hydrogen = (parseFloat(caclx) * 2 * 100) / (parseFloat(coalx) * 18);

    this.nitrogen = (parseFloat(volx) * parseFloat(norx) * 1.4) / parseFloat(coalx);
    this.sulphur = (parseFloat(baso4x) * 32 * 100) / (parseFloat(coalx) * 233);

    this.data = true;
  }
}
