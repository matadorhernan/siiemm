import { Service } from '../../interfaces/service.interface';
import { industrialServices_es } from './industrial.data';
import { nanotechServices_es } from './nano.data';
export const allServices_es: Service[] = [
  ...industrialServices_es,
  ...nanotechServices_es,
];
