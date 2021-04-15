<script>
  import {onMount} from 'svelte';
  import Table from "../../components/Tables/CardTable.svelte";
  import Modal from "../../components/Modal/Modal.svelte";
  import Form from '../../components/Form/Form.svelte';
  // import CardEditor from '../../components/Cards/CardEditor.svelte';

  import * as Users from '../../api/users';
  import EditorForm from "../../components/Form/EditorForm/EditorForm.svelte";
  // core components
  export let location;

  let tableData = [];
  let isModalShow = false;
  let filterField = Users.filterFields();
  let mode = 'view';
  let isLoading = false;

  onMount(() => {
    isLoading = true;
    Users.fetch().then(data => {
      isLoading = false;
      tableData = Users.toArray(data);
    })
  })

  const onShowFilter = () => isModalShow = true;
  const onCloseModal = () => isModalShow = false;
  const onAdd = () => mode = "add";
  const onEditorCancel = () => mode = "view";

  $: pageTitle = "User" + (mode !== 'view'?  " | " + mode : "");
  

</script>

<Modal title="Filter Data" isShow={isModalShow} on:close={onCloseModal}>
  <!-- <Form fields={filterField} isFull /> -->
  <EditorForm on:cancel="{onEditorCancel}" />

</Modal>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<div class="flex flex-wrap mt-4">
  <div class="w-full mb-12">
    {#if mode === "view"}
      <Table 
        title="Users Data" 
        on:filter="{onShowFilter}"
        on:add="{onAdd}"
        {isLoading}
        headers={Users.getHeaderConfig()} 
        data={tableData}/>
      {:else}
      <!-- <CardEditor title="User Editor" on:cancel={onEditorCancel}>
        <Form fields={filterField} />
      </CardEditor> -->
      <EditorForm on:cancel="{onEditorCancel}" title="User Editor" withButton />
    {/if}
  </div>
</div>
