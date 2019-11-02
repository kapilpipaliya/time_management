<script context='module'>

</script>
<script>
  import { onMount, onDestroy} from "svelte";
  import Sidebar from '../../_components/layout/Sidebar'
  import TopMenu from '../../_components/layout/TopMenu'
  import {NotificationDisplay} from 'index.ts'

  //.expanded-xl role note working so added the class manually.
</script>
<template lang="pug">
div.expanded-xl(data-role='navview' data-toggle='#paneToggle' data-expanded='xl' data-compact='lg' data-active-state='true')
  Sidebar(menu_name="my_menu")    
  .navview-content.h-100
    TopMenu
    #content-wrapper.content-inner.h-100(style='overflow-y: auto')
      slot
NotificationDisplay
</template>
