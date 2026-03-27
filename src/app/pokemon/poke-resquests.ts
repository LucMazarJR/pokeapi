import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface PokemonData {
  id: number;
  name: string;
  imageUrl: string;
}

interface PokeApiPokemonResponse {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PokeResquests {
  private http = inject(HttpClient);

  public getPokemonByName(name: string): Observable<PokemonData> {
    const formatedPokemonName = name.toLocaleLowerCase();
    return this.http
      .get<PokeApiPokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${formatedPokemonName}`)
      .pipe(
        map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          imageUrl: pokemon.sprites.front_default ?? '',
        }))
      );
  }
}
