import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteloginComponent } from './login/deletelogin/deletelogin.component';
import { EditloginComponent } from './login/editlogin/editlogin.component';
import { ListallloginComponent } from './login/listalllogin/listalllogin.component';
import { NewloginComponent } from './login/newlogin/newlogin.component';
import { ShowloginComponent } from './login/showlogin/showlogin.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    children: [
      { path: 'newlogin', component: NewloginComponent },
      { path: 'editlogin', component: EditloginComponent },
      { path: 'deletlogin', component: DeleteloginComponent },
      { path: 'showlogin', component: ShowloginComponent },
      { path: 'listlogin', component: ListallloginComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
