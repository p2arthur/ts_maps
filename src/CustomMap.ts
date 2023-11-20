import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;

  private mapOptions: google.maps.MapOptions = {
    zoom: 1,
    center: { lat: 0, lng: 0 },
  };

  constructor(private mapDiv: HTMLElement) {
    this.googleMap = new google.maps.Map(this.mapDiv, this.mapOptions);
  }

  public addUserMarker(user: User): void {
    new google.maps.Marker({ map: this.googleMap, position: user.location });
  }

  public addCompanyMarker(company: Company): void {}
}
