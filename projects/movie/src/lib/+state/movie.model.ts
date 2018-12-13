import { ID } from '@datorama/akita';

export interface Movie {
  id: ID;
  title: string;
  productionCompany: string;
  director: string;
  actors: string;
  genre: string;
  synopsis: string;
}

export function createInitialMovie({
  id, title, productionCompany, director, actors, genre, synopsis
}: Partial<Movie>) {
  return {
    id,
    title,
    productionCompany,
    director,
    actors,
    genre,
    synopsis,
  } as Movie;
}
