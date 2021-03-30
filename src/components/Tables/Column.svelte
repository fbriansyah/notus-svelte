<script>
  import TableDropdown from "components/Dropdowns/TableDropdown.svelte";

  export let type = "";
  export let data = "";
  export let additionalClasses = "";

  const containerClass =
    "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4";
</script>

<td class={containerClass + " " + additionalClasses}>
  {#if type === "bold"}
    <span class="ml-3 font-bold">
      {data}
    </span>
  {:else if type === 'dropdown' }
    <TableDropdown />
  {:else}
    {data}
  {/if}
</td>
