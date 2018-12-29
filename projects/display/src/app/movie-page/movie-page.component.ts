import { Component, OnInit } from '@angular/core';
import { MovieService, MovieQuery, Movie } from 'ng-movies/projects/movie/src';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  movie: Movie;

  constructor(
    // private breakpointObserver: BreakpointObserver,
    private movieService: MovieService,
    private movieQuery: MovieQuery,
    private route: ActivatedRoute
  ) {
    this.movieService.fetch();
  }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = this.movieQuery.getEntity(id);
  }

}
