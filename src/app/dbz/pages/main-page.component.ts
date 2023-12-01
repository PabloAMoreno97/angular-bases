import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 10000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  public onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  public onDeleteCharacter(i: number): void {
    this.characters.splice(i, 1);
  }

}
