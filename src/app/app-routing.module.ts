import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule) },
  {path:'',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
{path:'videojs',loadChildren:()=>import('./video-js/video-js.module').then(m=>m.VideoJsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
