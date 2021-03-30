import {get} from '../utils/http';
import {serverEndpoint} from '../constants';

const url = serverEndpoint + '/users';

export async function fetch() {
  return get(url);
}

export function toArray(data) {
  return data.map((d) => [
    d.name,
    d.username,
    d.email,
    d.phone,
    d.website,
    d.id
  ])
}

export function getHeaderConfig() {
  return [
    {name: 'Name', type: 'bold'},
    {name: 'Username'},
    {name: 'Email'},
    {name: 'Phone'},
    {name: 'Website'},
    {name: 'Action', type: 'dropdown'},
  ]
}