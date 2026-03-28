import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { PokeResquests, PokemonData } from './poke-resquests';
import { LucideArrowLeft, LucideArrowRight, LucideSearch, LucideDynamicIcon, LucideAArrowUp } from '@lucide/angular';

@Component({
  selector: 'app-pokemon',
  imports: [FormField, LucideSearch, LucideArrowLeft, LucideArrowRight],
  templateUrl: './pokemon.html',
})
export class Pokemon {
  pokeApi = inject(PokeResquests);

  searchType = signal<string | null>("id"); // Teste, trocar id por NUll
  pokemonNameModel = signal<string>('');
  searchPokemonData = signal<PokemonData | null>(null);

  pokemonForm = form(this.pokemonNameModel);
  
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

  goToNextPokemon(): void {
    const currentPokemon = this.searchPokemonData();

    if (!currentPokemon) {
      return;
    }

    this.pokeApi.getPokemonByName(currentPokemon.id + 1).subscribe({
      next: (pokemon) => this.searchPokemonData.set(pokemon),
      error: () => this.searchPokemonData.set(null),
    });
  }

  goToPreviousPokemon(): void {
    const currentPokemon = this.searchPokemonData();

    if (!currentPokemon || currentPokemon.id <= 1) {
      return;
    }

    this.pokeApi.getPokemonByName(currentPokemon.id - 1).subscribe({
      next: (pokemon) => this.searchPokemonData.set(pokemon),
      error: () => this.searchPokemonData.set(null),
    });
  }
}
