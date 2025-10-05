import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Resume } from './pages/resume/resume';
import { Contact } from './pages/contact/contact';
import { Project } from './pages/project/project';

export const routes: Routes = [
 { path: 'about', component : About},
  { path: 'resume', component: Resume },
  { path: 'project', component: Project },
   { path: '**', component: About },
];
