import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProjectComponent } from './components/project/project.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'create-project', component: CreateProjectComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'project/:id', component: ProjectComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: '**', component: ErrorPageComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);