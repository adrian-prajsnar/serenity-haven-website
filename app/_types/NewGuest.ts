import { Tables } from './database.types';

export type NewGuest = {
  email: Tables<'guests'>['email'];
  fullName: Tables<'guests'>['fullName'];
};
