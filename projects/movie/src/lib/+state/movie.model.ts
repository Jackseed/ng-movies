import { ID } from '@datorama/akita';

export interface Movie {
  id: ID;
  title: string;
  director: string[];
  producer: string[];
  actors: string[];
  genre: string[];
  synopsis: string;
}

export function createMovie(params: Partial<Movie>) {
  return {

  } as Movie;
}
