import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_helpers/auth.guard';
import {ImageDetailComponent} from './image-detail/image-detail.component';
import {ImageListComponent} from './image-list/image-list.component';
import {CategoryComponent} from './category/category.component';


const routes: Routes = [
  { path: '', component: ImageListComponent },
  // { path: 'admin', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]  },
  { path: 'images', component: ImageListComponent},
  { path: 'category/:id/image-id/:id', component: ImageDetailComponent},
  { path: 'category/:id', component: CategoryComponent},
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
