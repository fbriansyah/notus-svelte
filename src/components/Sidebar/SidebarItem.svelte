<script>
import { createEventDispatcher } from "svelte";

  import { link } from "svelte-routing";
  
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

</script>

{#if url !== null || children.length === 0}
  <li class="items-center">
    <a
      use:link
      href="{url}"
      class="text-xs uppercase py-3 font-bold block {location.indexOf(url) !== -1 ? 'text-red-500 hover:text-red-600':'text-blueGray-700 hover:text-blueGray-500'}"
    >
      <i
        class="fas fa-{icon} mr-2 text-sm {location.indexOf(url) !== -1 ? 'opacity-75' : 'text-blueGray-300'}"
      ></i>
      {title}
    </a>
  </li>
{:else}
  <li class="items-center">
    <span class="text-xs uppercase py-3 font-bold block text-blueGray-700">
      <div class="flex justify-between items-center">
        <i class="fas fa-{icon} mr-2 text-sm text-blueGray-300"></i> {title}
        <i class="fas fa-angle-{isOpen ? "down":"left"} text-sm text-blueGray-300 ml-auto cursor-pointer" on:click="{collapseMenu}"></i>
      </div>
      <ul class="{isOpen ? "flex": "hidden"} flex-col space-y-2 list-none py-2">
        {#each children as menu}
          <li class="items-center">
            <i class="fas fa-{menu.icon} ml-4 text-sm text-blueGray-300"></i> {menu.title}
          </li>
        {/each}
      </ul>
    </span>
  </li>
{/if}

