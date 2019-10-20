
<script context='module'>
import { Ws } from '../_js/ws/ws_todo.js'
export async function preload(page, session) {
Ws.setupConnection(this.req, this.res)
}
</script>
<script>
  import { onMount, onDestroy} from "svelte";
  import Sidebar from '../_components/layout/Sidebar'
  import TopMenu from '../_components/layout/TopMenu'
  onMount(() => {
    // var hash = location.hash;
    // var target = hash.length > 0 ? hash.substr(1) : "dashboard";
    // var link = J(".navview-menu a[href*="+target+"]");
    // var menu = link.closest("ul[data-role=dropdown]");
  });
  //.expanded-xl role note working so added the class manually.
</script>
<template lang="pug">
div.expanded-xl(data-role='navview' data-toggle='#paneToggle' data-expanded='xl' data-compact='lg' data-active-state='true')
  Sidebar(menu_name="admin_menu")
  .navview-content.h-100
    TopMenu
    #content-wrapper.content-inner.h-100(style='overflow-y: auto')
      slot

</template>