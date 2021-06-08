import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './authenticate/profil/profil.component';
import { EditorLibraryComponent } from './components/editor/editor-library/editor-library.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'', component:LayoutComponent,
     children: [
      {path:'', redirectTo:'home', pathMatch:"full"},
      {path:'home', component:HomeComponent},
      {path:'profil', component:ProfilComponent},
      {path:'editor-library', component:EditorLibraryComponent},
      {path:'not-found', component:ErrorPageComponent},
      {path:'**', redirectTo:'/not-found'},
     ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
