<script>
  export let value = "";
  export let label = "Field";
  export let name = "field";
  export let additionalClasses = "";
  export let rows = 3;
  export let helperText = "This is helper text";
</script>

<div
  class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
>
  <label
    for={name}
    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  >
    {label}
  </label>
  <div class="mt-1 sm:mt-0 sm:col-span-2">
    <textarea
      id={name}
      {name}
      {rows}
      {value}
      class="{additionalClasses} max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
    />
    <p class="mt-2 text-sm text-gray-500">
      {helperText}
    </p>
  </div>
</div>
