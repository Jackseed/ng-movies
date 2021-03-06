import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Movie, MovieQuery, MovieService } from 'ng-movies/projects/movie/src/lib/+state';
import { Observable } from 'rxjs';

@Component({
  selector: 'movie-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss'],
})
export class MoviesDashboardComponent {

  movies$: Observable<Movie[]>;

  /** Based on the screen size, switch from standard to one column per row
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  */

  constructor(
    // private breakpointObserver: BreakpointObserver,
    private movieService: MovieService,
    private movieQuery: MovieQuery
  ) {
    this.movieService.fetch();
    this.movies$ = this.movieQuery.selectAll();
  }
}
