<script>
  import Table from "components/Tables/CardTable.svelte";
  import * as Users from '../../api/users';
  import {onMount} from 'svelte';
  // core components
  export let location;

  let tableData = [];

  onMount(() => {
    Users.fetch().then(data => {
      tableData = Users.toArray(data);
      console.log(tableData)
    })
  })

</script>

<div class="flex flex-wrap mt-4">
  <div class="w-full mb-12 px-4">
    <Table title="Users Data" headers={Users.getHeaderConfig()} data={tableData}/>
  </div>
</div>
