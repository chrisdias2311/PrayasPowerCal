import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProximateAnalysisComponent } from './MyComponents/proximate-analysis/proximate-analysis.component';
import { UltimateAnalysisComponent } from './MyComponents/ultimate-analysis/ultimate-analysis.component';
import { CalorificCalcComponent } from './MyComponents/calorific-calc/calorific-calc.component';
import { HomeComponent } from './MyComponents/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarbonComponent } from './MyComponents/calorific-calc/carbon/carbon.component';
import { HydrogenComponent } from './MyComponents/calorific-calc/hydrogen/hydrogen.component';
import { OxygenComponent } from './MyComponents/calorific-calc/oxygen/oxygen.component';
import { SulphurComponent } from './MyComponents/calorific-calc/sulphur/sulphur.component';
import { CalorificComponent } from './MyComponents/calorific-calc/calorific/calorific.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { FeedbackComponent } from './MyComponents/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ProximateAnalysisComponent,
    UltimateAnalysisComponent,
    CalorificCalcComponent,
    HomeComponent,
    CarbonComponent,
    HydrogenComponent,
    OxygenComponent,
    SulphurComponent,
    CalorificComponent,
    FooterComponent,
    AboutComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
