<script>
  import TableDropdown from "components/Dropdowns/TableDropdown.svelte";

  export let type = "";
  export let data = "";
  export let additionalClasses = "";

  const truncate = (text, length) => {
    if(text.length > length) {
      return text.substr(0, length) + "...";
    } else {
      return text;
    }
  }

  const containerClass =
    "border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-nowrap p-4";
</script>

<td class={containerClass + " " + additionalClasses}>
  {#if type === "bold"}
    <span class="font-bold overflow-hidden truncate w-2">
      {truncate(data, 20)}
    </span>
  {:else if type === 'checkbox' }
    <div class="flex items-center h-5">
      <input
        value={data}
        id={"checkbox-table-"+data}
        type="checkbox"
        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
    </div>
  {:else if type === 'dropdown' }
    <TableDropdown />
  {:else if type === 'truncate' }
    <span class="overflow-hidden truncate w-2">
      {truncate(data, 20)}
    </span>
  {:else}
    {data}
  {/if}
</td>
