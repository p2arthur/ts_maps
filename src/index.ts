import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const mapElement = document.getElementById('map') as HTMLElement;
const user = new User();
const company = new Company();
const customMap = new CustomMap(mapElement);

customMap.addMarker(user);
customMap.addMarker(company);
