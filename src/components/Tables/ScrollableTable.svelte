<script>
  import {createEventDispatcher} from 'svelte';
  import {slide} from 'svelte/transition';
  // core components
  import Column from "./Column.svelte";
  import Button from '../Button/Button.svelte';
  import Pager from './Pager.svelte';

  // can be one of light or dark
  export let color = "light";
  export let title = "Card Tables";
  export let headers = ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", ""]; // ["Name", "Username", "Email", "Phone", "Website"]
  export let data;

  const dispatch = createEventDispatcher();

  function generateHeaderClasses(color) {
    return `px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
      color === "light"
        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
        : "bg-red-700 text-red-200 border-red-600"
    }`;
  }

  const onFilter = () => dispatch('filter');
  const onAdd = () => dispatch('add');
</script>

<div
  transition:slide
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color ===
  'light'
    ? 'bg-white'
    : 'bg-red-800 text-white'}"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <div class="flex">
          <h3
            class="font-semibold text-lg {color === 'light'
              ? 'text-blueGray-700'
              : 'text-white'}"
          >
            {title}
          </h3>
          <div class="ml-auto flex space-x-1">
            <select class="block appearance-none text-sm bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>10</option>
              <option>15</option>
              <option>25</option>
              <option>100</option>
            </select>
            <Button on:click={onFilter} colorClass="text-white bg-indigo-500 active:bg-indigo-600">Filter</Button>
            <Button on:click={onAdd}>Tambah</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="block w-full overflow-x-auto mb-2">
    <!-- Projects table -->
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse bg-indigo-50 table-fixed">
        <thead>
          <tr>
            {#each headers as header, i (i)}
              <th class={generateHeaderClasses(color)}> 
                { typeof header == 'object'? header.name: header} 
              </th>
            {/each}
          </tr>
        </thead>
      </table>
    </div>
    <div class="overflow-y-auto" style="max-height: 720px;">
      <table class="items-center w-full bg-transparent border-collapse bg-indigo-50 table-fixed">
        <tbody>
          {#if data && data.length > 0}
            {#each data as row, j}
              <tr class="{(j%2) === 0 ? "bg-white": "bg-gray-50"} hover:bg-blueGray-200">
                {#each row as col, i}
                  <Column 
                    data="{col}" 
                    type="{headers[i].type ? headers[i].type : ''}"
                    additionalClasses="{i === (headers.length-1) ?'text-right':'text-left'}" 
                  />
                {/each}
              </tr>
            {/each}
          {/if}
        </tbody>
      </table>
    </div>
  </div>
  <div class="pr-2">
    <Pager />
  </div>
</div>
