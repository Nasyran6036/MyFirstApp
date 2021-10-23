import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'video',
    pathMatch: 'full'
  },
  {
    path: 'lab4',
    loadChildren: () => import('./lab4/lab4.module').then( m => m.Lab4PageModule)
  },
  {
    path: 'arrayradiobutton',
    loadChildren: () => import('./arrayradiobutton/arrayradiobutton.module').then( m => m.ArrayradiobuttonPageModule)
  },
  {
    path: 'lab5',
    loadChildren: () => import('./lab5/lab5.module').then( m => m.Lab5PageModule)
  },
  {
    path: 'kelantan',
    loadChildren: () => import('./kelantan/kelantan.module').then( m => m.KelantanPageModule)
  },
  {
    path: 'perak',
    loadChildren: () => import('./perak/perak.module').then( m => m.PerakPageModule)
  },
  {
    path: 'lab6',
    loadChildren: () => import('./lab6/lab6.module').then( m => m.Lab6PageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'terengganu',
    loadChildren: () => import('./terengganu/terengganu.module').then( m => m.TerengganuPageModule)
  },
  {
    path: 'selangor',
    loadChildren: () => import('./selangor/selangor.module').then( m => m.SelangorPageModule)
  },
  {
    path: 'kuala-lumpur',
    loadChildren: () => import('./kuala-lumpur/kuala-lumpur.module').then( m => m.KualaLumpurPageModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./survey/survey.module').then( m => m.SurveyPageModule)
  },
  {
    path: 'lab7',
    loadChildren: () => import('./lab7/lab7.module').then( m => m.Lab7PageModule)
  },
  {
    path: 'lab8',
    loadChildren: () => import('./lab8/lab8.module').then( m => m.Lab8PageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'contact2',
    loadChildren: () => import('./contact2/contact2.module').then( m => m.Contact2PageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./view-post/view-post.module').then( m => m.ViewPostPageModule)
  },

  {
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
},

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

