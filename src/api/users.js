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
    d.address.city,
    d.id,
  ])
}

export function getHeaderConfig() {
  return [
    {name: 'Name', type: 'bold'},
    {name: 'Username'},
    {name: 'Email'},
    {name: 'Phone'},
    {name: 'Website'},
    {name: 'Kota', type:'bold'},
    {name: 'Action', type: 'dropdown'},
  ]
}

export function filterFields() {
  return [
    {
      kind: 'input',
      name: 'Name',
      label: 'Nama',
      options: {
        type: 'text',
        size: 'sm',
        placeholder: 'Masukkan Nama'
      },
    },
    {
      kind: 'input',
      name: 'username',
      label: 'Username',
      options: {
        size: 'sm',
        type: 'text',
        placeholder: 'Masukkan Username'
      },
    },
    {
      kind: 'input',
      name: 'email',
      label: 'Email',
      options: {
        size: 'sm',
        type: 'text',
        placeholder: 'Masukkan Email'
      },
    },
    {
      kind: 'input',
      name: 'phone',
      label: 'Phone',
      options: {
        size: 'sm',
        type: 'text',
        placeholder: 'Masukkan Phone'
      },
    },
    {
      kind: 'input',
      name: 'website',
      label: 'Website',
      options: {
        size: 'sm',
        type: 'text',
        placeholder: 'Masukkan Website'
      },
    },
  ]
}