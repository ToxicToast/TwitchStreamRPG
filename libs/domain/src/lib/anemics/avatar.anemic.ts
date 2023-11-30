import { Anemic } from '@twitch-rpg/shared';

export interface AvatarAnemic extends Anemic {
  readonly userId: string;
  readonly level: number;
  readonly experience: number;
  readonly strength: number;
  readonly dexterity: number;
  readonly constitution: number;
  readonly intelligence: number;
  readonly wisdom: number;
  readonly charisma: number;
}
