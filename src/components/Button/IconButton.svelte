<script>
  export let icon = "plus";
  export let colorClass = "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
</script>

<button
  type="button"
  on:click
  class="inline-flex items-center px-1 py-2 border border-transparent rounded-md shadow-sm {colorClass} focus:outline-none focus:ring-2 focus:ring-offset-2"
>
  <!-- Heroicon name: solid/plus -->
  <i class="fas fa-{icon} text-sm" />
</button>
