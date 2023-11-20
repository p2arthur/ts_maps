import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User();

const mapElement = document.getElementById('map') as HTMLElement;

const customMap = new CustomMap(mapElement);

customMap.addUserMarker(user);
