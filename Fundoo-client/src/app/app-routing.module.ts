import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteComponent } from './components/note/note.component';
const routes: Routes = [{
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'forgotpassword',
  component:ForgotpasswordComponent
},
{
  path:'resetpassword/:token',
  component:ResetpasswordComponent
},
{
path:'dashboard',
component:DashboardComponent,
children:[
  {
    path:'',
    redirectTo:'note',
    pathMatch:'full'
  },
{
  path:'note',
  component:NoteComponent

}

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
