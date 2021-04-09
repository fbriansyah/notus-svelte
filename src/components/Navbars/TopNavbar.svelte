<script>
  import {topMenu} from  '../../stores/menus';

  const baseClass =
    "whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md cursor-pointer";

  let topMenuEl;

  const scrollTo = (direction) => {
    if (direction === 'right') {
      topMenuEl.scrollLeft = topMenuEl.clientWidth;
    }

    if (direction === 'left') {
      topMenuEl.scrollLeft = 0;
    }
  }
  export let location;
</script>

<div>
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a tab</label>
    <select
      id="tabs"
      name="tabs"
      class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      {#each $topMenu as menu}
        <option selected={menu.isActive}>{menu.title}</option>
      {/each}
    </select>
  </div>
  <div class="hidden sm:block bg-white p-2 rounded-md">
    <div class="flex space-x-4">
      <div class="flex items-center cursor-pointer" on:click="{() => scrollTo('left')}">
        <i class="fas fa-caret-left" />
      </div>
      <nav
        class="top-menu -mb-px flex space-x-4 overflow-x-auto"
        aria-label="Tabs"
        bind:this={topMenuEl}
      >
        <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        {#each $topMenu as menu, i (menu.url)}
          <span
          on:click="{topMenu.selecteMenu(menu.url)}"
          on:contextmenu|preventDefault="{topMenu.deleteMenu(menu.url)}"
            class="{baseClass} {location.indexOf(menu.url) !== -1
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-500 hover:text-gray-700 '}"
          >
            {menu.title}
            </span>
        {/each}
      </nav>
      <div class="flex items-center cursor-pointer" on:click="{() => scrollTo('right')}">
        <i class="fas fa-caret-right" />
      </div>
    </div>
  </div>
</div>