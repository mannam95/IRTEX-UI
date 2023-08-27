import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { ResultsComponent } from './results/results.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: '', component: BodyComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  BodyComponent,
  ResultsComponent,
  ContactComponent,
];
