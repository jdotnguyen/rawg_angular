import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { GenreComponent } from './genre/genre.component';
import { PlatformComponent } from './platform/platform.component';
import { PublisherComponent } from './publisher/publisher.component';
import { DeveloperComponent } from './developer/developer.component';
import { StoreComponent } from './store/store.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameInfoComponent,
    GenreComponent,
    PlatformComponent,
    PublisherComponent,
    DeveloperComponent,
    StoreComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
