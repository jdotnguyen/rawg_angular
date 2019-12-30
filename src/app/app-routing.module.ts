import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from 'src/app/home/home.component';
import { GameInfoComponent } from 'src/app/game-info/game-info.component';
import { GenreComponent } from 'src/app/genre/genre.component';
import { PlatformComponent } from 'src/app/platform/platform.component';
import { PublisherComponent } from 'src/app/publisher/publisher.component';
import { DeveloperComponent } from 'src/app/developer/developer.component';
import { StoreComponent } from 'src/app/store/store.component';
import { TagComponent } from 'src/app/tag/tag.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameInfoComponent },
  { path: 'genre', component: GenreComponent },
  { path: 'platform', component: PlatformComponent },
  { path: 'publisher', component: PublisherComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'store', component: StoreComponent },
  { path: 'tag', component: TagComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
