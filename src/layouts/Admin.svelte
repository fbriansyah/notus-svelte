<script>
  import { Router, Route } from "svelte-routing";

  // components for this layout
  // import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  // import HeaderStats from "components/Headers/HeaderStats.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";

  // pages for this layout
  import Dashboard from "views/admin/Dashboard.svelte";
  import Settings from "views/admin/Settings.svelte";
  import Tables from "views/admin/Tables.svelte";
  import Users from "views/admin/Users.svelte";
  import Posts from "views/admin/Posts.svelte";
  import Maps from "views/admin/Maps.svelte";
  import TopNavbar from "../components/Navbars/TopNavbar.svelte";
  import { onMount } from "svelte";
  import { topMenu } from "../stores/menus";

  export let location;
  export let admin = "";

  onMount(() => {
    topMenu.init()
  })
</script>

<div>
  <Sidebar {location} />
  <div class=" md:ml-64 bg-blueGray-100 pt-4">
    <!-- <AdminNavbar />
    <HeaderStats {location} /> -->

    <div class="px-4 md:px-10 mx-auto w-full h-screen">
      <TopNavbar location={location.href} />
      <Router url="admin">
        <Route path="dashboard" component={Dashboard} />
        <Route path="settings" component={Settings} />
        <Route path="tables" component={Tables} />
        <Route path="users" component={Users} />
        <Route path="posts" component={Posts} />
        <Route path="maps" component={Maps} />
      </Router>
      <!-- <FooterAdmin /> -->
    </div>
  </div>
</div>
