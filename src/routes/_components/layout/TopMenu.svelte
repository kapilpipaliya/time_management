<script context='module'>
//import {} from '../../_js/protos/time/topmenu/proto/TopMenuRequest_pb.js'
//import {} from '../../_js/protos/time/topmenu/proto/TopMenuResponse_pb.js'
import { S } from '../../_js/ws/ws_todo.js'
import {event} from '../../_js/events/event.js'
// ctx_import
// ctx_import_end
export async function preload(page, session) {
S.setupConnection(this.req, this.res)
// export
// export_end
}
</script>
<script>
// inst
// inst_end
</script>
<style src='./_TopMenu-3.less' lang='less'></style>
<template src='./_TopMenu-4.pug'></template>
<!-- component -->
<!-- component_end -->
