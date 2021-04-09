<script>
  import { createEventDispatcher } from "svelte";
  import { navigate } from "svelte-routing";
  import { topMenu } from "../../stores/menus";
  
  export let location;
  export let title;
  export let url;
  export let icon = 'caret-right';
  export let isOpen;
  export let children = [];

  const dispatch = createEventDispatcher()

  function collapseMenu() {
    dispatch('toggle');
  }

  function menuClickHandler() {
    const _menu = {
      title,
      url
    }
    topMenu.addMenu(_menu)
    topMenu.clearActive()
    navigate(url)
  }

</script>

{#if url !== null || children.length === 0}
  <li class="items-center cursor-pointer">
    <span
      on:click="{menuClickHandler}"
      class="text-xs uppercase py-3 font-bold block {location.indexOf(url) !== -1 ? 'text-red-500 hover:text-red-600':'text-blueGray-700 hover:text-blueGray-500'}"
    >
      <i
        class="fas fa-{icon} mr-2 text-sm {location.indexOf(url) !== -1 ? 'opacity-75' : 'text-blueGray-300'}"
      ></i>
      {title}
    </span>
  </li>
{:else}
  <li class="items-center">
    <span class="text-xs uppercase py-3 font-bold block text-blueGray-700">
      <div class="flex justify-between items-center cursor-pointer" on:click="{collapseMenu}">
        <i class="fas fa-{icon} mr-2 text-sm text-blueGray-300"></i> {title}
        <i class="fas fa-angle-{isOpen ? "down":"left"} text-sm text-blueGray-300 ml-auto cursor-pointer"></i>
      </div>
      <ul class="{isOpen ? "flex": "hidden"} flex-col space-y-2 list-none py-2">
        {#each children as menu}
          <li class="items-center cursor-pointer" on:click="{menuClickHandler}">
            <i class="fas fa-{menu.icon} ml-4 mr-2 text-sm text-blueGray-300"></i> {menu.title}
          </li>
        {/each}
      </ul>
    </span>
  </li>
{/if}

