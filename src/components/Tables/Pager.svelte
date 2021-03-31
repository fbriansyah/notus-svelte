<script>
  import Input from '../Form/Input.svelte';
  import Button from '../Button/Button.svelte';

  const onNextHandler = (e) => e.preventDefault();

</script>
<div class="flex flex-row-reverse space-x-1 items-baseline">
  <a on:click="{onNextHandler}" href="#agn" class="circle-btn">
    <i class="fas fa-chevron-right -mr-px"></i>
  </a>
  <div class="text-white text-xs bg-orange-500 px-4 py-2 rounded mx-2">
    of 200
  </div>
  <Input value={1} size="sm" isPagger/>
  <Button colorClass="text-white bg-orange-500 active:bg-orange-600">GO</Button>
  <a on:click="{onNextHandler}" href="#agn" class="circle-btn">
    <i class="fas fa-chevron-left -mr-px"></i>
  </a>
</div>