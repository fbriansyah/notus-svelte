<script>
  import Table from "../../components/Tables/CardTable.svelte";
  import Modal from "../../components/Modal/Modal.svelte";
  import Form from '../../components/Form/Form.svelte';
  // import CardEditor from '../../components/Cards/CardEditor.svelte';

  import * as Users from '../../api/users';
  import {onMount} from 'svelte';
  import EditorForm from "../../components/Form/EditorForm.svelte";
  // core components
  export let location;

  let tableData = [];
  let isModalShow = false;
  let filterField = Users.filterFields();
  let mode = 'view';

  onMount(() => {
    Users.fetch().then(data => {
      tableData = Users.toArray(data);
    })
  })

  const onShowFilter = () => isModalShow = true;
  const onCloseModal = () => isModalShow = false;
  const onAdd = () => mode = "add";
  const onEditorCancel = () => mode = "view";
  

</script>

<Modal title="Filter Data" isShow={isModalShow} on:close={onCloseModal}>
  <Form fields={filterField} isFull />
</Modal>
<div class="flex flex-wrap mt-4">
  <div class="w-full mb-12">
    {#if mode === "view"}
      <Table 
        title="Users Data" 
        on:filter="{onShowFilter}"
        on:add="{onAdd}"
        headers={Users.getHeaderConfig()} 
        data={tableData}/>
      {:else}
      <!-- <CardEditor title="User Editor" on:cancel={onEditorCancel}>
        <Form fields={filterField} />
      </CardEditor> -->
      <EditorForm />
    {/if}
  </div>
</div>
