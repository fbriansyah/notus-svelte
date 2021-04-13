<script>
  import { createEventDispatcher } from "svelte";
  import InputWithPrefix from "./EditorForm/InputWithPrefix.svelte";
  import CheckboxGroup from "./EditorForm/CheckboxGroup.svelte";
  import RadioGroup from "./EditorForm/RadioGroup.svelte";
  import TextArea from "./EditorForm/TextArea.svelte";
  import Input from "./EditorForm/Input.svelte";
  import * as usersApi from "../../api/users";
  import Select from "./EditorForm/Select.svelte";

  export let withButton = false;

  const dispatch = createEventDispatcher();

  const cancelHandler = () => dispatch("cancel");
  const submitHandler = () => dispatch("save");

  const editorFields = usersApi.editorFields();

  const notifications = [];
  let pushNotification = "";

  const checkIfExist = (data) => {
    return data && data !== "";
  };
</script>

<form class="space-y-8 divide-y divide-gray-200 bg-white rounded-md p-4">
  <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
    <div>
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
        {#each editorFields as field (field.name)}
          {#if field.kind === "input"}
            {#if checkIfExist(field.options.prefix)}
              <InputWithPrefix
                label={field.label}
                name={field.name}
                prefix={field.options.prefix}
                type={field.options.type}
                placeholder={field.options.placeholder}
                value=""
              />
            {:else}
              <Input
                label={field.label}
                name={field.name}
                type={field.options.type}
                placeholder={field.options.placeholder}
                value=""
              />
            {/if}
          {/if}
          {#if field.kind === "text-area"}
            <TextArea
              label={field.label}
              name={field.name}
              rows={field.options.rows}
              helperText={field.options.helperText}
              value=""
            />
          {/if}
          {#if field.kind === "checkbox"}
            <div class="pt-6 sm:pt-5 sm:border-t sm:border-gray-200">
              <CheckboxGroup
                label={field.label}
                name={field.name}
                value={notifications}
                items={field.items}
              />
            </div>
          {/if}
          {#if field.kind === "radio"}
            <div class="pt-6 sm:pt-5 sm:border-t sm:border-gray-200">
              <RadioGroup
                description={field.description}
                label={field.label}
                name={field.name}
                value={pushNotification}
                items={field.items}
              />
            </div>
          {/if}
          {#if field.kind === "select"}
            <Select label="{field.label}" name="{field.name}" options={field.items} value="{1}" />
          {/if}
        {/each}
      </div>
    </div>

    {#if withButton}
      <div class="pt-5">
        <div class="flex justify-end">
          <button
            on:click={cancelHandler}
            type="button"
            class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            on:click={submitHandler}
            type="submit"
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    {/if}
  </div>
</form>
