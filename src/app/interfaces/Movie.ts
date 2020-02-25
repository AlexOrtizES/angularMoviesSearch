import { Actor } from './Actor';

export interface Movie{
    imdbID: number,
    ID: number,
    Name: string
    Actors: Actor[],
    Type: string,
    Poster: string,
    Title: String
}