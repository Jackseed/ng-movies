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

  private genId(): number {
    return this.query.getCount() + 1;
  }

  private addMovie() {
    this.service.add({
      id: this.genId(),
      title: this.creationForm.controls.title.value,
      productionCompany: this.creationForm.controls.productionCompany.value,
      director: this.creationForm.controls.director.value,
      actors: this.creationForm.controls.actors.value,
      genre: this.creationForm.controls.genre.value,
      synopsis: this.creationForm.controls.synopsis.value
    });
    console.log(this.genId());
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
