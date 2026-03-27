import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-pokemon',
  imports: [FormField],
  templateUrl: './pokemon.html',
})
export class Pokemon {
  pokemonNameModel = signal<string>('')
  pokemonForm = form(this.pokemonNameModel)


}
