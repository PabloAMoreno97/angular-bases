import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  public addCharacter(character: Character): void {

    const newCharacter: Character = {
      ...character
    }

    this.characters.push(newCharacter);
  }

  // public onDeleteCharacter(i: number): void {
  //   this.characters.splice(i, 1);
  // }

  public deleteCharacterById( id: string){
    this.characters = this.characters.filter( character => character.id !== id)
  }

}
