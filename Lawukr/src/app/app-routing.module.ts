import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationExperienceComponent } from './education-experience/education-experience.component';
import {MainComponent} from './main/main.component'

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
  {path: 'edexp', component: EducationExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
