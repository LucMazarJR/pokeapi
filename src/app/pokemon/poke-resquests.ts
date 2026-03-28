import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface PokemonData {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
  height: number;
  weight: number;
}

interface PokeApiPokemonResponse {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
  };
  types: {type: {name: string}}[];
  height: number;
  weight: number;
}

@Injectable({
  providedIn: 'root',
})
export class PokeResquests {
  private http = inject(HttpClient);

  public getPokemonByName(name: string | number): Observable<PokemonData> {
    const formatedPokemonParameter = String(name).trim().toLowerCase();

    return this.http
      .get<PokeApiPokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${formatedPokemonParameter}`)
      .pipe(
        map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          imageUrl: pokemon.sprites.front_default ?? '',
          types: pokemon.types.map(object => object.type.name),
          height: pokemon.height,
          weight: pokemon.weight,
        }))
      );
  }
}
