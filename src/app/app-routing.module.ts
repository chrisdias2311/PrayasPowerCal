import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalorificCalcComponent } from './MyComponents/calorific-calc/calorific-calc.component';
import { UltimateAnalysisComponent } from './MyComponents/ultimate-analysis/ultimate-analysis.component';
import { ProximateAnalysisComponent } from './MyComponents/proximate-analysis/proximate-analysis.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { CalorificComponent } from './MyComponents/calorific-calc/calorific/calorific.component';
import { CarbonComponent } from './MyComponents/calorific-calc/carbon/carbon.component';
import { HydrogenComponent } from './MyComponents/calorific-calc/hydrogen/hydrogen.component';
import { OxygenComponent } from './MyComponents/calorific-calc/oxygen/oxygen.component';
import { SulphurComponent } from './MyComponents/calorific-calc/sulphur/sulphur.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { FeedbackComponent } from './MyComponents/feedback/feedback.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'ultimate',
    component:UltimateAnalysisComponent
  },
  {
    path:'proximate',
    component:ProximateAnalysisComponent
  },
  {
    path:'calorific',
    component:CalorificCalcComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },

  {
    path:'calorific/calorific-value',
    component:CalorificComponent
  },
  {
    path:'calorific/carbon',
    component:CarbonComponent
  },
  {
    path:'calorific/hydrogen',
    component:HydrogenComponent
  },
  {
    path:'calorific/oxygen',
    component:OxygenComponent
  },
  {
    path:'calorific/sulphur',
    component:SulphurComponent
  },
  {
    path:'calorific',
    component:CalorificCalcComponent, children:[
      {path:'calorific-value', component:CalorificComponent},
      {path:'carbon', component:CarbonComponent},
      {path:'hydrogen', component:HydrogenComponent},
      {path:'oxygen', component:OxygenComponent},
      {path:'sulphur', component:SulphurComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
