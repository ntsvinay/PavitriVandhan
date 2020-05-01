import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstregisterationComponent } from './firstregisteration/firstregisteration.component';
import { InforamtionpageComponent } from './inforamtionpage/inforamtionpage.component';
import { MatchedProfileComponent } from './matched-profile/matched-profile.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { StepStatusBarComponent } from './step-status-bar/step-status-bar.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: 'firstregisteration', component: FirstregisterationComponent },
  { path: 'inforamtionpage', component: InforamtionpageComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'matched-profile', component: MatchedProfileComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'step-status-bar', component: StepStatusBarComponent },
  { path: 'header', component: HeaderComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[FirstregisterationComponent,InforamtionpageComponent,
  MatchedProfileComponent, MyprofileComponent, PreferencesComponent, StepStatusBarComponent, HeaderComponent];
