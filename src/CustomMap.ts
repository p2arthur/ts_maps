export class CustomMap {
  private googleMap: google.maps.Map;

  private mapOptions: google.maps.MapOptions = {
    zoom: 1,
    center: { lat: 0, lng: 0 },
  };

  constructor(private mapDiv: HTMLElement) {
    this.googleMap = new google.maps.Map(this.mapDiv, this.mapOptions);
  }

  public addMarker() {}
}
