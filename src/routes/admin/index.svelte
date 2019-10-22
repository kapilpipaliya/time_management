<script context='module'>
//import {} from '../_js/protos/time/admin/dashboard/proto/admin_DashboardRequest_pb.js'
//import {} from '../_js/protos/time/admin/dashboard/proto/admin_DashboardResponse_pb.js'
import { Ws } from '../_js/ws/ws_todo.js'
import {event} from '../_js/events/event.js'
// ctx_import
import {MenuRequest} from '../_js/protos/time/menu/proto/MenuRequest_pb.js'
import {MenuResponse} from '../_js/protos/time/menu/proto/MenuResponse_pb.js'
// ctx_import_end
export async function preload(page, session) {
Ws.setupConnection(this.req, this.res)
// export
// export_end
}
</script>
<script>
// inst
import { onMount, onDestroy } from "svelte";
export let menu_name="admin_menu"
let menu_data = []
onMount(()=>{
  const menuRequest = new MenuRequest()
  menuRequest.setName(menu_name)
  const bytes = menuRequest.serializeBinary()
  Ws.trigger(event.menu, 0, bytes)


  Ws.bind(event.menu, 0, 1, (bytes) => {
    const res = MenuResponse.deserializeBinary(bytes)
    menu_data = JSON.parse(res.getJson()).menu
    //console.log(menu_data)
  })
})
// inst_end
</script>
<style src='./_index-3.less' lang='less'></style>
<template src='./_index-4.pug'></template>
<!-- component -->
<!-- component_end -->
