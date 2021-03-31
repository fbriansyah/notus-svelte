<script>
  export let options = [];
</script>

<select class="block appearance-none text-sm bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
  {#each options as value (value)}
    <option {value}>{value}</option>
  {/each}
</select>