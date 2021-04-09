<script>
  import { link } from "svelte-routing";
  import {sideMenu} from '../../stores/menus';

  // core components
  import NotificationDropdown from "components/Dropdowns/NotificationDropdown.svelte";
  import UserDropdown from "components/Dropdowns/UserDropdown.svelte";
  import SidebarItem from "./SidebarItem.svelte";

  let collapseShow = "hidden";
  let isAvatarMenuShow = false;

  function toggleCollapseShow(classes) {
    collapseShow = classes;
  }

  function toggleCollapseAvatar() {
    isAvatarMenuShow = !isAvatarMenuShow
  }

  export let location;
</script>

<nav
  class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
>
  <div
    class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
  >
    <!-- Toggler -->
    <button
      class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
      type="button"
      on:click={() => toggleCollapseShow('bg-white m-2 py-3 px-6')}
    >
      <i class="fas fa-bars"></i>
    </button>
    <!-- Brand -->
    <a
      use:link
      class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
      href="/"
    >
      Efner.id
    </a>
    <!-- User -->
    <ul class="md:hidden items-center flex flex-wrap list-none">
      <li class="inline-block relative">
        <NotificationDropdown />
      </li>
      <li class="inline-block relative">
        <UserDropdown />
      </li>
    </ul>
    <!-- Collapse -->
    <div
      class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded {collapseShow}"
    >
      <!-- Collapse header -->
      <div
        class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
      >
        <div class="flex flex-wrap">
          <div class="w-6/12">
            <a
              use:link
              class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
              href="/"
            >
              Efner.id
            </a>
          </div>
          <div class="w-6/12 flex justify-end">
            <button
              type="button"
              class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              on:click={() => toggleCollapseShow('hidden')}
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Form -->
      <form class="mt-6 mb-4 md:hidden">
        <div class="mb-3 pt-0">
          <input
            type="text"
            placeholder="Search"
            class=" px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
          />
        </div>
      </form>
      <div class="px-2 mt-6 relative inline-block text-left">
        <!-- Profile Avatar -->
        <div>
          <button on:click="{toggleCollapseAvatar}" type="button" class="group w-full bg-white rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500" id="options-menu" aria-expanded="false" aria-haspopup="true">
            <span class="flex w-full justify-between items-center">
              <span class="flex min-w-0 items-center justify-between space-x-3">
                <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src="https://avatars.githubusercontent.com/u/14029740?v=4" alt="">
                <span class="flex-1 flex flex-col min-w-0">
                  <span class="text-gray-900 text-sm font-medium truncate">Febriansyah Nuur Rasyiid</span>
                  <span class="text-gray-500 text-sm truncate">@fbriansyah</span>
                </span>
              </span>
              <!-- Heroicon name: solid/selector -->
              <svg class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
        <!-- Menu Avatar -->
        <div class="z-10 mx-3 origin-top {isAvatarMenuShow ? "absolute": "hidden"} right-0 left-0 mt-1 rounded-md shadow-lg bg-blueGray-100 ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div class="py-1" role="none">
            <a href="#efner" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
            <a href="#efner" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Settings</a>
            <a href="#efner" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Notifications</a>
          </div>
          <div class="py-1" role="none">
            <a href="#efner" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Get desktop app</a>
            <a href="#efner" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
          </div>
          <div class="py-1" role="none">
            <a href="#efner" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</a>
          </div>
        </div>
        <!-- End Menu Avatar -->
        <!-- End Profile Avatar -->

      <!-- Divider -->
      <hr class="my-4 md:min-w-full" />
      <!-- Heading -->
      <h6
        class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
      >
        Admin Layout Pages
      </h6>
      <!-- Navigation -->

      <ul class="md:flex-col md:min-w-full flex flex-col list-none">
        {#each $sideMenu as menu, i (menu.title)}
          <SidebarItem 
            icon={menu.icon}
            isOpen={menu.isOpen}
            location={location.href}
            children={menu.children}
            title={menu.title}
            url={menu.url}
            on:toggle={sideMenu.toggleOpen(i)}
          />
        {/each}
      </ul>

      <!-- Divider -->
      <hr class="my-4 md:min-w-full" />
      <!-- Heading -->
      <h6
        class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
      >
        Auth Layout Pages
      </h6>
      <!-- Navigation -->

      <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
        <li class="items-center">
          <a
            use:link
            class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
            href="/auth/login"
          >
            <i class="fas fa-fingerprint text-blueGray-300 mr-2 text-sm"></i>
            Login
          </a>
        </li>

        <li class="items-center">
          <a
            use:link
            class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
            href="/auth/register"
          >
            <i class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>
            Register
          </a>
        </li>
      </ul>

      <!-- Divider -->
      <!-- <hr class="my-4 md:min-w-full" /> -->
      
    </div>
  </div>
</nav>
