import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Movie, MovieService, MovieQuery } from 'ng-movies/projects/movie/src/lib/+state';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'movie-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  searchValue = '';
  results: any;

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {}

  search() {
    this.results = this.afs.collection('movies', ref => ref
      .orderBy('title')
      .startAt(this.searchValue.toLowerCase())
      .endAt(this.searchValue.toLowerCase() + '\uf8ff')
      .limit(10))
      .valueChanges();
  }

}
