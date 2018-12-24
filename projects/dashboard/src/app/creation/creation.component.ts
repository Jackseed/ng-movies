import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../../../../movie/src/lib/+state/movie.service';
import { MovieQuery } from '../../../../movie/src/lib/+state/movie.query';

@Component({
  selector: 'movie-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
})
export class CreationComponent {
  creationForm = this.fb.group({
    title: [null, Validators.required],
    productionCompany: [null, Validators.required],
    director: [null, Validators.required],
    actors: [null, Validators.required],
    genre: [null, Validators.required],
    synopsis: [null, Validators.compose([
      Validators.required, Validators.maxLength(180)])
    ]
  });


  genres = ['Comedy', 'Drama', 'Horror', 'Fantasy', 'Science fiction'];

  private addMovie() {
    this.service.addMovie(
      this.creationForm.controls.title.value,
      this.creationForm.controls.productionCompany.value,
      this.creationForm.controls.director.value,
      this.creationForm.controls.actors.value,
      this.creationForm.controls.genre.value,
      this.creationForm.controls.synopsis.value,
      this.creationForm.controls.owner.value,
      this.creationForm.controls.poster.value
    );
  }

  constructor(
    private fb: FormBuilder,
    private service: MovieService,
    private query: MovieQuery) {}

  onSubmit() {
    this.addMovie();
    alert('Thanks!');
  }
}
