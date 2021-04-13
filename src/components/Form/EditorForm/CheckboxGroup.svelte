<script>
  export let name = "checkbox";
  export let label = "Checkbox Group";
  export let value = [];
  export let items = [
    { label: "Option Label", value: "option-value", description: "Option description" },
  ];
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
    <div class="mt-4 sm:mt-0 sm:col-span-2">
      <div class="max-w-lg space-y-4">
        {#each items as item,i (item.value)}
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                value={item.value}
                id={"name-"+i}
                bind:group={value}
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="{"name-"+i}" class="font-medium text-gray-700"
                >{item.label}</label
              >
              <p class="text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
