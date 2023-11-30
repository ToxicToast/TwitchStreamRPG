import { Domain, Nullable } from '@twitch-rpg/shared';
import { UserAnemic } from '../anemics';

export class UserAggregate implements Domain<UserAnemic> {
  constructor(
    private readonly id: string,
    private userName: string,
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

  toAnemic(): UserAnemic {
    return {
      id: this.id,
      userName: this.userName,
      isActive: this.isActive(),
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
    };
  }
}
