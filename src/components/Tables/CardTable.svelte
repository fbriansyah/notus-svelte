<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fade } from "svelte/transition";
  // core components
  import Column from "./Column.svelte";
  import Pager from "./Pager.svelte";
  import TableAction from "./TableAction.svelte";

  // can be one of light or dark
  export let color = "light";
  export let title = "Card Tables";
  export let headers = []; // ["Name", "Username", "Email", "Phone", "Website"]
  export let data;
  export let isLoading = false;
  export let isActionsShow = false;

  let headerType = [];
  let headerChild = [];
  let isScroll = false;

  const dispatch = createEventDispatcher();

  function generateHeaderClasses(color) {
    return `px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ${
      color === "light"
        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
        : "bg-red-700 text-red-200 border-red-600"
    }`;
  }

  const onFilter = () => dispatch("filter");
  const onAdd = () => dispatch("add");

  const checkChild = (array) => {
    return array.filter(dt => dt.children && dt.children.length > 0).length > 0
  }
  const isArrayEmpty = (arr) => arr.length === 0;
  function generateHeader() {
    const newListType = [];
    const newListChildren = [];
    headers.forEach((header) => {
      if(header.children.length > 0) {
        header.children.forEach(child => {
          newListType.push(child.type);
          newListChildren.push(child);
        })
      } else {
        newListType.push(header.type)
      }
    })

    headerType = newListType;
    headerChild = newListChildren;
  }

  function scrollHandler(e) {
    if(e.target.scrollTop < 60)  {
      isScroll = false;
    } else {
      isScroll = true;
    }
  }

  function getSpan(type, header) {
    if(type === 'row') {
      if(isScroll) {
        console.log('scroll-span')
        return 1;
      }
      return isArrayEmpty(header.children) ? 2: 1;
    }
    
    if(type === 'col') {
      return isArrayEmpty(header.children)? 1: header.children.length;
    }
  }

  onMount(() => {
    generateHeader()
  });
</script>

<div
  transition:fade
  class=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color ===
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
          <div class="ml-auto flex space-x-2">
            <!-- <Button on:click={onFilter} colorClass="text-white bg-indigo-500 active:bg-indigo-600">Filter</Button> -->
            <!-- <Button on:click={onAdd}>Tambah</Button> -->
            <div class="flex items-center cursor-pointer">
              <i class="fas fa-file-csv text-green-500 text-2xl" />
            </div>
            <div class="flex items-center cursor-pointer pl-2 border-l border-gray-200" on:click="{onFilter}">
              <i class="fas fa-filter text-indigo-500 text-xl" />
            </div>
            <div class="flex items-center cursor-pointer" on:click={onAdd}>
              <i class="fas fa-plus-circle text-orange-600 text-2xl" />
            </div>
            {#if isActionsShow}
              <TableAction />
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="block w-full overflow-x-auto mb-2 tableFixHead" on:scroll="{scrollHandler}">
    <!-- Projects table -->
    <table
      class="items-center w-full bg-transparent border-collapse bg-indigo-50"
    >
      <thead>
        <tr>
          {#if checkChild(headers)}
            {#each headers as header, i (i)}
              <th 
                class={generateHeaderClasses(color) + (isArrayEmpty(header.children)? ' text-left': ' text-center')} 
                colspan={getSpan('col', header)}
                rowspan={getSpan('row', header)}>
                {typeof header == "object" ? header.name : header}
              </th>
            {/each}
          {:else}
            {#each headers as header, i (i)}
              <th class={generateHeaderClasses(color)}>
                {typeof header == "object" ? header.name : header}
              </th>
            {/each}
          {/if}
        </tr>
        {#if headerChild.length > 0}
          <tr>
            {#each headerChild as header, i (i)}
              <th class={generateHeaderClasses(color)} style="top:40px">
                {typeof header == "object" ? header.name : header}
              </th>
            {/each}
          </tr>
        {/if}
      </thead>
      <tbody>
        {#if isLoading}
          <tr>
            {#each headerType as header (header)}
              <Column type="skeleton-box" />
            {/each}
          </tr>
        {:else if data && data.length > 0}
          {#each data as row, j}
            <tr
              class="{j % 2 === 0
                ? 'bg-white'
                : 'bg-gray-50'} hover:bg-blueGray-200"
            >
              {#each row as col, i}
                <Column
                  data={col}
                  on:columnAction
                  type={headerType[i] ? headerType[i] : ""}
                  additionalClasses={i === headers.length - 1
                    ? "text-right"
                    : ""}
                />
              {/each}
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
  <div class="pr-2">
    <Pager />
  </div>
</div>
