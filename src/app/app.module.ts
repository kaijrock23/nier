import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { GameComponent } from './features/game/game.component';
import { CharactersComponent } from './features/characters/characters.component';
import { WorldComponent } from './features/world/world.component';
import { MediaComponent } from './features/media/media.component';
import { GameDinaComponent } from './features/game-dina/game-dina.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { BuyNowComponent } from './features/buy-now/buy-now.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GameComponent,
    CharactersComponent,
    WorldComponent,
    MediaComponent,
    GameDinaComponent,
    GalleryComponent,
    BuyNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
