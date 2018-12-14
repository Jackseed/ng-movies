import { Injectable } from '@angular/core';
import { MovieStore } from './movie.store';
import { Movie, createMovie } from './movie.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class MovieService {

  moviesCollection: AngularFirestoreCollection;

  constructor(
    private afs: AngularFirestore,
    private movieStore: MovieStore) {
      this.moviesCollection = afs.collection('movies');
      this.fetch();
  }

  fetch() {
    this.moviesCollection.valueChanges().subscribe((movies: Movie[]) => {
      this.movieStore.set(movies);
    });
  }

  addMovie(title: string, productionCompany: string, director: string, actors: string, genre: string, synopsis: string) {
    const id = this.afs.createId();
    const movie = { id, title, productionCompany, director, actors, genre, synopsis };
    this.moviesCollection.doc(id).set(movie).then(res => {
      this.movieStore.add(createMovie(movie));
    });
  }

  deleteMovie(id: string) {
    this.moviesCollection.doc(id).delete().then((res) => {
      this.movieStore.remove(id);
    });
  }

  updateMovie(id: string, title: string, productionCompany: string, director: string, actors: string, genre: string, synopsis: string) {
    this.moviesCollection.doc(id).update({ title, productionCompany, director, actors, genre, synopsis }).then((res) => {
      this.movieStore.update(id, { title, productionCompany, director, actors, genre, synopsis });
    });
  }

}
