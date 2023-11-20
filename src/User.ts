import { faker } from '@faker-js/faker';

export class User {
  public name: string;
  public location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
