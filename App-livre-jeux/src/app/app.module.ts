import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SelectRolesComponent } from './components/select-roles/select-roles.component';
import { EditorLibraryComponent } from './components/editor-library/editor-library.component';
import { PlayerLibraryComponent } from './components/player-library/player-library.component';
import { ListHerosComponent } from './components/list-heros/list-heros.component';
import { ListChaptersComponent } from './components/list-chapters/list-chapters.component';
import { LinkChaptersComponent } from './components/link-chapters/link-chapters.component';
import { NewChapterComponent } from './components/new-chapter/new-chapter.component';
import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { StoreComponent } from './components/store/store.component';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { ProfilComponent } from './components/profil/profil.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
