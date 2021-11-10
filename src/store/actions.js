import axios from 'axios';

export function getUser() {
  return { type: 'USER/GETUSER' };
}