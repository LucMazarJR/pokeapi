import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { PokeResquests, PokemonData } from './poke-resquests';

@Component({
  selector: 'app-pokemon',
  imports: [FormField],
  templateUrl: './pokemon.html',
})
export class Pokemon {
  pokeApi = inject(PokeResquests);

  pokemonNameModel = signal<string>('');
  pokemonForm = form(this.pokemonNameModel);
  searchPokemonData = signal<PokemonData | null>(null);

  onSubmit(event: Event): void {
    event.preventDefault();
    const pokemonName = this.pokemonForm().value().trim();

    if (!pokemonName) {
      this.searchPokemonData.set(null);
      return;
    }

    this.pokeApi.getPokemonByName(pokemonName).subscribe({
      next: (pokemon) => this.searchPokemonData.set(pokemon),
      error: () => this.searchPokemonData.set(null),
    });
  }
}
