/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { User } from './User';

console.log('something');

const newUser = new User();
const newCompanny = new Company();

const mapDiv = document.getElementById('map') as HTMLElement;

console.log(mapDiv);

new google.maps.Map(mapDiv, {
  zoom: 0,
  center: { lat: 0, lng: 0 },
});
