import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppHeaderComponent },
  { path: 'about', component: AppAboutComponent },
  { path: 'contact', component: AppContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
