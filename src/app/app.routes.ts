import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AboutComponent },
    { path: 'work-experiences', component: WorkExperiencesComponent },
    { path: 'my-projects', component: MyProjectsComponent }
];
