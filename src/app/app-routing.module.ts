import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { DatabindingComponent } from './databinding/databinding.component';

const routes: Routes = [

  // {
  //   path:'',
  //   component:AComponent
  // },

  // {
  //   path:'',
  //   redirectTo:'compA',
  //   pathMatch:'full'
  // },

  {
    path:"compA",
    component:AComponent
  },
  {
    path:"compB",
    component:BComponent
  },
  {
    path:'**',
    component:DatabindingComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

