<script >

  import Input from "./InputWithLabel.svelte";
  import Select from "./Select.svelte";
  // import Textarea from "./Textarea.svelte";

  export let isFull = false;

  export let fields = [];
</script>

<form class="w-full {isFull ? '': 'max-w-md'} flex flex-col justify-center">
  {#each fields as field}
    {#if field.kind === "input"}
      <Input
        name={field.name}
        label={field.label}
        type={field.options.type}
        size={field.options.size ? field.options.size: ''}
        placeholder={field.options.placeholder}
      />
    {:else if field.kind === "select"}
      <Select
        label={field.label}
        name={field.name}
        options={field.options.options}
      />
    {/if}
  {/each}
</form>
