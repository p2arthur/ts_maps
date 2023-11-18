import { faker } from '@faker-js/faker';

export class Company {
  name: string;
  location: { lat: number; lng: number };

  constructor() {
    this.name = faker.company.name();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
