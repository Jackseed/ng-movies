import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { MovieStore } from './movie.store';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {

  constructor(private movieStore: MovieStore
              // private http: HttpClient
              ) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.movieStore.set(entities);
    // });
  }

  public add(movie: Movie) {
    this.movieStore.add(movie);
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.movieStore.add(entity);
    // });
  }

}
