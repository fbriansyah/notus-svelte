import {get} from '../utils/http';
import {serverEndpoint} from '../constants';

const url = serverEndpoint + '/posts';

export async function fetch() {
  return get(url);
}

export function toArray(data) {
  return data.map((d) => [
    d.id,
    d.title,
    d.body,
    d.title,
    d.title,
    d.title,
    d.id,
  ])
}

export function getHeaderConfig() {
  return [
    {name: '#', type: 'checkbox', children: []},
    {name: 'Title', type: 'bold', children: []},
    {name: 'Body', type: 'truncate', children: []},
    {name: 'Text', type: 'truncate', children: [
      {name: 'Text 1', type: 'truncate'},
      {name: 'Text 2', type: 'truncate'},
      {name: 'Text 3', type: 'truncate'},
    ]},
    {name: 'Action', type: 'dropdown', children: []},
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

export function editorFields() {
  return [
    {
      kind: 'input',
      name: 'username',
      label: 'Username',
      options: {
        type: 'text',
        prefix: "workcation.com/",
        placeholder: ''
      },
    },
    {
      kind: 'input',
      name: 'fullname',
      label: 'Fullname',
      options: {
        type: 'text',
        prefix: "",
        placeholder: "Nama Lengkap"
      },
    },
    {
      kind: 'text-area',
      name: 'about',
      label: 'About',
      options: {
        rows: 3,
        helperText:"Write a few sentences about yourself."
      },
    },
    {
      kind: 'checkbox',
      name: 'comments',
      label: 'By Email',
      items: [
        {
          label: "Comments",
          value: "comments",
          description: "Get notified when someones posts a comment on a posting.",
        },
        {
          label: "Candidates",
          value: "candidates",
          description: "Get notified when a candidate applies for a job.",
        },
        {
          label: "Offers",
          value: "offers",
          description: "Get notified when a candidate accepts or rejects an offer.",
        },
      ]
    },
    {
      kind: 'radio',
      name: 'push-notification',
      label: 'Push Notifications',
      description: "These are delivered via SMS to your mobile phone.",
      items: [
        { label: "Everything", value: 1 },
        { label: "Same as email", value: 2 },
        { label: "No push notifications", value: 3 },
      ]
    },
    {
      kind: 'select',
      name: 'level',
      label: 'Level',
      description: "These are delivered via SMS to your mobile phone.",
      items: [
        { label: "User", value: 1 },
        { label: "Admin", value: 2 },
        { label: "Editor", value: 3 },
      ]
    }
  ]
}