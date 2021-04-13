<script>
  export let placeholder = "";
  export let value = "";
  export let type = "text";
  export let label = "Field";
  export let name = "field";
  export let additionalClasses = "";
  export let prefix = "RP";
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
    <div class="max-w-lg flex rounded-md shadow-sm">
      <span
        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
      >
        {prefix}
      </span>
      <input
        {type}
        {name}
        id={name}
        {value}
        {placeholder}
        class="{additionalClasses} flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
      />
    </div>
  </div>
</div>
