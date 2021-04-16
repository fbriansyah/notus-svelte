<script>
  import {onMount} from 'svelte';
  import Table from "../../components/Tables/CardTable.svelte";
  import Modal from "../../components/Modal/Modal.svelte";
  import Form from '../../components/Form/Form.svelte';
  // import CardEditor from '../../components/Cards/CardEditor.svelte';

  import * as Api from '../../api/posts';
  import EditorForm from "../../components/Form/EditorForm/EditorForm.svelte";
  // core components
  export let location;

  let tableData = [];
  let isModalShow = false;
  let filterField = Api.filterFields();
  let mode = 'view';
  let isLoading = false;
  let listSelectedID = [];

  onMount(() => {
    isLoading = true;
    Api.fetch().then(data => {
      tableData = Api.toArray(data);
      isLoading = false;
    })
  })

  const onShowFilter = () => isModalShow = true;
  const onCloseModal = () => isModalShow = false;
  const onAdd = () => mode = "add";
  const onEditorCancel = () => mode = "view";

  // reactive variable
  $: pageTitle = "Post" + (mode !== 'view'?  " | " + mode : "");
  $: isActionsShow = (listSelectedID.length > 0)
  
  const columnActionHandler = e => {
    const {data, action} = e.detail;
    if(action === 'checkbox-add') {
      const newList = [...listSelectedID]
      newList.push(data);
      listSelectedID = newList;
    }

    if(action === 'checkbox-del') {
      const newList = [...listSelectedID]
      listSelectedID = newList.filter(dt => dt !== data);
    }
  }

</script>

<Modal title="Filter Data" isShow={isModalShow} on:close={onCloseModal}>
  <Form fields={filterField} isFull />
  <!-- <EditorForm on:cancel="{onEditorCancel}" /> -->

</Modal>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<div class="flex flex-wrap mt-4">
  <div class="w-full mb-12">
    {#if mode === "view"}
      <Table 
        title="Posts Data" 
        on:filter="{onShowFilter}"
        on:add="{onAdd}"
        on:columnAction="{columnActionHandler}"
        {isLoading}
        {isActionsShow}
        headers={Api.getHeaderConfig()} 
        data={tableData}/>
      {:else}
      <!-- <CardEditor title="User Editor" on:cancel={onEditorCancel}>
        <Form fields={filterField} />
      </CardEditor> -->
      <EditorForm on:cancel="{onEditorCancel}" withButton />
    {/if}
  </div>
</div>
