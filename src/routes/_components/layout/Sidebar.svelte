<script context='module'>
//import {} from '../../_js/protos/time/sidebar/proto/SidebarRequest_pb.js'
//import {} from '../../_js/protos/time/sidebar/proto/SidebarResponse_pb.js'
import { Ws } from '../../_js/ws/ws_todo.js'
import {event} from '../../_js/events/event.js'
// ctx_import
// ctx_import_end
export async function preload(page, session) {
Ws.setupConnection(this.req, this.res)
// export
// export_end
}
</script>
<script>
// inst
import Menu from '../../_components/Menu'
export let menu_name;
// inst_end
</script>
<style src='./_Sidebar-3.less' lang='less'></style>
<template src='./_Sidebar-4.pug'></template>
<!-- component -->
<!-- component_end -->
