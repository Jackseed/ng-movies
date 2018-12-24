import { ID } from '@datorama/akita';

export interface Movie {
  id: ID;
  title: string;
  productionCompany: string;
  director: string;
  actors: string;
  genre: string;
  synopsis: string;
  owner: string;
  poster: string;
}

export function createMovie({
  id, title, productionCompany, director, actors, genre, synopsis, owner, poster
}): Movie {
  return {
    id,
    title,
    productionCompany,
    director,
    actors,
    genre,
    synopsis,
    owner,
    poster
  };
}
