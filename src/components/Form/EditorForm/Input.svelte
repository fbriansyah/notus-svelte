<script>
  export let placeholder = "";
  export let value = "";
  export let type = "text";
  export let label = "Field";
  export let name = "field";
  export let additionalClasses = "";
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
    <input
      on:input
      id={name}
      {type}
      {name}
      {value}
      {placeholder}
      class="{additionalClasses} max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
    />
  </div>
</div>
