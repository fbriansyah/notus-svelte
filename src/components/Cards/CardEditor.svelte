<script>
  import {createEventDispatcher} from 'svelte';
  import {slide} from 'svelte/transition';
  // core components
  import Button from '../Button/Button.svelte';

  // can be one of light or dark
  export let color = "light";
  export let title = "Card Tables";

  const dispatch = createEventDispatcher();

  const onCancel = () => dispatch('cancel');
</script>

<div
  transition:slide
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color ===
  'light'
    ? 'bg-white'
    : 'bg-red-800 text-white'}"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <div class="flex">
          <h3
            class="font-semibold text-lg {color === 'light'
              ? 'text-blueGray-700'
              : 'text-white'}"
          >
            {title}
          </h3>
          <div class="ml-auto flex space-x-1">
            <Button 
              on:click={onCancel} 
              colorClass="text-white bg-red-500 active:bg-red-600">
              Batal
            </Button>
            <Button>Simpan</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="block w-full overflow-x-auto">
    <!-- Projects table -->
    <slot />
  </div>
</div>
