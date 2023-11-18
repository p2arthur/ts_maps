import { faker } from '@faker-js/faker';

class User {
  private name: string;
  private location: {
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

const user = new User();
