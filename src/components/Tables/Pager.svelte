<script>
  import Input from "../Form/Input.svelte";
  import Button from "../Button/Button.svelte";

  const onNextHandler = (e) => e.preventDefault();
</script>

<div class="flex flex-row-reverse space-x-1 items-baseline">
  <a on:click={onNextHandler} href="#agn" class="circle-btn">
    <i class="fas fa-chevron-right -mr-px" />
  </a>

  <div class="text-xs bg-gray-300 px-4 py-2 rounded mx-2">
    of 200
  </div>
  <Input value={1} size="sm" isPagger />
  <Button colorClass="text-white bg-orange-500 active:bg-orange-600">GO</Button>
  <a on:click={onNextHandler} href="#agn" class="circle-btn">
    <i class="fas fa-chevron-left -mr-px" />
  </a>

  <select
    class="block appearance-none text-sm bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-state"
  >
    <option>10</option>
    <option>15</option>
    <option>25</option>
    <option>100</option>
  </select>
</div>
