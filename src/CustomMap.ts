//Instructions to every other class on how they can be used as argument to 'addMarker'
export interface Mappable {
  location: { lat: number; lng: number };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  private mapOptions: google.maps.MapOptions = {
    zoom: 1,
    center: { lat: 0, lng: 0 },
  };

  constructor(private mapDiv: HTMLElement) {
    this.googleMap = new google.maps.Map(this.mapDiv, this.mapOptions);
  }

  public addMarker(mappable: Mappable): void {
    const infoWindowContent = mappable.markerContent();

    const infowindow = new google.maps.InfoWindow({
      content: infoWindowContent,
    });

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });

    marker.addListener('click', () => {
      infowindow.open(this.googleMap, marker);
    });
  }
}
