<script>
  export let name = "radio-button";
  export let label = "Radio Button Group";
  export let value;
  export let description = '';
  export let items = [{label: 'All', value:1}];
</script>

<div role="group" aria-labelledby="label-{name}">
  <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
    <div>
      <div
        class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
        id="label-{name}"
      >
        {label}
      </div>
    </div>
    <div class="sm:col-span-2">
      <div class="max-w-lg">
        <p class="text-sm text-gray-500">
          {description}
        </p>
        {#each items as item, i (item.value)}
          <div class="mt-4 space-y-4">
            <div class="flex items-center">
              <input
                id="{name}-{i}"
                name="{name}-{i}"
                value="{item.value}"
                type="radio"
                bind:group={value}
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                for="{name}-{i}"
                class="ml-3 block text-sm font-medium text-gray-700"
              >
                {item.label}
              </label>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>