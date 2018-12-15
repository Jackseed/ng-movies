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

export function createMovie({
  id, title, productionCompany, director, actors, genre, synopsis
}): Movie {
  return {
    id,
    title,
    productionCompany,
    director,
    actors,
    genre,
    synopsis,
  };
}
