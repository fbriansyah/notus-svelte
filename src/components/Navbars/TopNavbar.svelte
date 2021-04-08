<script>
  const menus = [
    ["My Account", false],
    ["Team Members", true],
    ["Company", false],
    ["Billing", false],
    ["Menu 1", false],
    ["Menu 2", false],
    ["Menu 3", false],
    ["Menu 4", false],
    ["Menu 5", false],
    ["Menu 6", false],
    ["Menu 7", false],
    ["Menu 8", false],
    ["Menu 9", false],
  ];

  const baseClass =
    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm";

  let topMenu;

  const scrollTo = (direction) => {
    if (direction === 'right') {
      topMenu.scrollLeft = topMenu.clientWidth;
    }

    if (direction === 'left') {
      topMenu.scrollLeft = 0;
    }
  }
</script>

<div>
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a tab</label>
    <select
      id="tabs"
      name="tabs"
      class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      {#each menus as menu}
        <option selected={menus[1]}>{menu[0]}</option>
      {/each}
    </select>
  </div>
  <div class="hidden sm:block bg-white px-2">
    <div class="flex space-x-4">
      <div class="flex items-center cursor-pointer" on:click="{() => scrollTo('left')}">
        <i class="fas fa-caret-left" />
      </div>
      <nav
        class="top-menu -mb-px flex space-x-8 overflow-x-auto"
        aria-label="Tabs"
        bind:this={topMenu}
      >
        <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        {#each menus as menu}
          <a
            href="#efner"
            class="{baseClass} {menu[1]
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
          >
            {menu[0]}
          </a>
        {/each}
      </nav>
      <div class="flex items-center cursor-pointer" on:click="{() => scrollTo('right')}">
        <i class="fas fa-caret-right" />
      </div>
    </div>
  </div>
</div>