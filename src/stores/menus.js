import {writable} from 'svelte/store';
import {navigate} from 'svelte-routing';

// ==== Side Menu ====
const sideMenuInitState = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'tv',
    children: [],
  },
  {
    title: 'Users',
    url: '/admin/users',
    icon: 'address-card',
    children: [],
  },
  {
    title: 'Posts',
    url: '/admin/posts',
    icon: 'newspaper',
    children: [],
  },
  {
    title: 'Nested',
    url: null,
    icon: 'stream',
    children: [
      {
        title: 'Nested 1',
        icon: 'tools',
        url: '/admin/nested1',
      },
      {
        title: 'Nested 2',
        icon: 'map-marked',
        url: '/admin/nested2',
      },
      {
        title: 'Nested 3',
        icon: 'cat',
        url: '/admin/nested3',
      },
      {
        title: 'Nested 4',
        icon: 'cat',
        url: '/admin/nested4',
      },
      {
        title: 'Nested 5',
        icon: 'cat',
        url: '/admin/nested5',
      },
      {
        title: 'Nested 6',
        icon: 'cat',
        url: '/admin/nested6',
      }
    ],
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

// ==== Top Menu ====

const topMenuInitState = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard'
  }
]

const createTopMenus = () => {
  const localStorageKey = 'top-menu';
  const {subscribe, set, update} = writable([...topMenuInitState]);

  const init = () => {
    const localTopMenu = localStorage.getItem(localStorageKey);
    // jika ada data top menu di localstorage
    // store diisi dengan data tersebut 
    if(localTopMenu && localTopMenu !== '') {
      set(JSON.parse(localTopMenu));
    }
  }

  const reset = () => {
    set(topMenuInitState)
  }
  const addMenu = (menu) => {
    update(currentState => {
      const findIndex = currentState.findIndex((state) => state.url === menu.url)
      if(findIndex === -1) {
        // simpan data ke localstorage dan tambah data ke store
        // jika menu tersebut belum di tambahkan
        localStorage.setItem(localStorageKey, JSON.stringify([...currentState, menu]))
        return [...currentState, menu];
      }
      return currentState;
    })
  }
  const deleteMenu = (url) => {
    if(url === topMenuInitState[0].url) {
      return
    } else {
      // hanya menu selain dashboard yang dapat didelete
      update(currentState => {
        const newState = currentState.filter((state) => url !== state.url)
        localStorage.setItem(localStorageKey, JSON.stringify(newState));
        return newState
      })
    }
    navigate(topMenuInitState[0].url);
  }

  const selecteMenu = (url) => {
    navigate(url);
  }

  return {
    subscribe,
    reset,
    addMenu,
    deleteMenu,
    selecteMenu,
    init
  }
}

export const topMenu = createTopMenus();