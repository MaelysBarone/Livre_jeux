//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


//Composant
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './authenticate/login/login.component';
import { RegisterComponent } from './authenticate/register/register.component';
import { SelectRolesComponent } from './authenticate/select-roles/select-roles.component';
import { EditorLibraryComponent } from './components/editor/editor-library/editor-library.component';
import { PlayerLibraryComponent } from './components/player/player-library/player-library.component';
import { ListHerosComponent } from './components/editor/list-heros/list-heros.component';
import { ListChaptersComponent } from './components/editor/list-chapters/list-chapters.component';
import { LinkChaptersComponent } from './components/editor/link-chapters/link-chapters.component';
import { NewChapterComponent } from './components/editor/new-chapter/new-chapter.component';
import { NewHeroComponent } from './components/editor/new-hero/new-hero.component';
import { NewBookComponent } from './components/editor/new-book/new-book.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { StoreComponent } from './components/player/store/store.component';
import { PlayGameComponent } from './components/player/play-game/play-game.component';
import { ProfilComponent } from './authenticate/profil/profil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SelectRolesComponent,
    EditorLibraryComponent,
    PlayerLibraryComponent,
    ListHerosComponent,
    ListChaptersComponent,
    LinkChaptersComponent,
    NewChapterComponent,
    NewHeroComponent,
    NewBookComponent,
    ErrorPageComponent,
    StoreComponent,
    PlayGameComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
