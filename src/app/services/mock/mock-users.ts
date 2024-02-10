import { User } from "../Entity/user";

export const USERS: User[] = [
  {
    id: 1,
    firstname: 'Augustin',
    lastname: 'STR',
    email: 'augustin.gus@yahoo.fr',
    password: 'biblioadmin', 
    role: 'admin'
  },
  {
    id: 2,
    firstname: 'Baptiste',
    lastname: 'RGR',
    email: 'bapt.admin@outlook.com',
    password: 'bibliouser', 
    role: 'user'
  },
  {
    id: 3,
    firstname: 'User',
    lastname: 'User',
    email: 'user@exemple.com',
    password: 'user', 
    role: 'user'
  }
];
