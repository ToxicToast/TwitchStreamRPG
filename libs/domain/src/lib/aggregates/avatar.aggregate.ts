import { Domain, Nullable } from '@twitch-rpg/shared';
import { AvatarAnemic } from '../anemics';

export class AvatarAggregate implements Domain<AvatarAnemic> {
  constructor(
    private readonly id: string,
    private readonly userId: string,
    private level: number,
    private experience: number,
    private strength: number,
    private dexterity: number,
    private constitution: number,
    private intelligence: number,
    private wisdom: number,
    private charisma: number,
    private active: boolean,
    private readonly created_at: Date,
    private readonly updated_at: Nullable<Date>,
    private readonly deleted_at: Nullable<Date>
  ) {}

  isActive(): boolean {
    return this.active && !this.isDeleted();
  }

  isUpdated(): boolean {
    return !!this.updated_at;
  }

  isDeleted(): boolean {
    return !!this.deleted_at;
  }

  toAnemic(): AvatarAnemic {
    return {
      id: this.id,
      userId: this.userId,
      level: this.level,
      experience: this.experience,
      strength: this.strength,
      dexterity: this.dexterity,
      constitution: this.constitution,
      intelligence: this.intelligence,
      wisdom: this.wisdom,
      charisma: this.charisma,
      isActive: this.isActive(),
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
    };
  }
}
