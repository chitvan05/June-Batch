import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { StructuralComponent } from './Directives/structural/structural.component';
import { PipeComponent } from './Pipes/pipe/pipe.component';
import { DashboardComponent } from './Test/dashboard/dashboard.component';
import { LoginComponent } from './Test/login/login.component';

const routes: Routes = [

  // {
  //   path:'',
  //   component:AComponent
  // },

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },

  {
    path:"compA",
    component:AComponent
  },
  {
    path:"pipes",
    component:PipeComponent
  },
  {
    path:"compB",
    component:BComponent
  },
  {
    path:"structuralDirective",
    component:StructuralComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:'**',
    component:DatabindingComponent
  },

  ///////TEST ROUTING EXAMPLE ///////
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

