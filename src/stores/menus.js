import {writable} from 'svelte/store';

const sideMenuInitState = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'tv',
    children: [],
    isOpen: false
  },
  {
    title: 'Users',
    url: '/admin/users',
    icon: 'address-card',
    children: [],
    isOpen: false
  },
  {
    title: 'Nested',
    url: null,
    icon: 'stream',
    children: [
      {
        title: 'Nested 1',
        icon: 'tools',
        url: '#/admin/nested',
      },
      {
        title: 'Nested 2',
        icon: 'map-marked',
        url: '#/admin/nested',
      },
      {
        title: 'Nested 3',
        icon: 'cat',
        url: '#/admin/nested',
      }
    ],
    isOpen: false
  },
];


const createSideMenus = () => {
  const {subscribe, set, update} = writable([...sideMenuInitState]);

  const toggleOpen = index => {
    update(context => {
      const data = [...context];
      data[index].isOpen = !data[index].isOpen;
      return data;
    })
  }

  return {
    subscribe,
    reset: () => {
      set(sideMenuInitState)
    },
    toggleOpen: toggleOpen
  }
}

export const sideMenu = createSideMenus();