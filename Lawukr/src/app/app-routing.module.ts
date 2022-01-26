import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsComponent } from './awards/awards.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { EducationExperienceComponent } from './education-experience/education-experience.component';
import { MainComponent } from './main/main.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'edexp', component: EducationExperienceComponent },
  { path: 'awards', component: AwardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
