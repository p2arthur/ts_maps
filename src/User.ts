import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
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

  markerContent(): string {
    return `<div><h4>Username: ${this.name}<h4></div>`;
  }
}
