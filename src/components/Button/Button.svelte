<script>
  export let additionalClass = "";
  export let colorClass = "text-white bg-emerald-500 active:bg-emerald-600"
</script>

<button
  on:click
  class="{colorClass} font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 {additionalClass}"
>
  <slot />
</button>
