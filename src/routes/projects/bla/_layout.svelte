<script context='module'>
import { Ws } from '../../_js/ws/ws_todo.js'
export async function preload(page, session) {
Ws.setupConnection(this.req, this.res)
// export
// export_end
}
</script>
<script>
  import { onMount, onDestroy} from "svelte";
  import Sidebar from '../../_components/layout/Sidebar'
  import TopMenu from '../../_components/layout/TopMenu'
  //.expanded-xl role note working so added the class manually.
</script>
<template lang="pug">
div.expanded-xl(data-role='navview' data-toggle='#paneToggle' data-expanded='xl' data-compact='lg' data-active-state='true')
  Sidebar(menu_name="project_menu")    
  .navview-content.h-100
    TopMenu
    #content-wrapper.content-inner.h-100(style='overflow-y: auto')
      slot

</template>