import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/shared/services/genre.service';
import { Router } from '@angular/router';

// Import interface
import { Genre } from 'src/shared/interfaces/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  // Genres
  genresArray: Genre[];

  constructor(
    private _router: Router
    , private _genreService: GenreService
  ) { }

  ngOnInit() {
    // Get list of games
    this._genreService.getGenres()
      .subscribe(data => {
        this.genresArray = data['results'];
      },
        error => { console.log(error) });
  }

  // Go to specific genre page
  viewGenre(genre) {
    this._router.navigate(['/genre'], { queryParams: { id: genre.id } });
  }

  // Go to specific game page
  viewGame(game) {
    this._router.navigate(['/game'], { queryParams: { id: game.id }});
  }
}
