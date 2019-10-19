<script context='module'>
import {MenuRequest} from '../_js/protos/time/menu/proto/MenuRequest_pb.js'
import {MenuResponse} from '../_js/protos/time/menu/proto/MenuResponse_pb.js'
import { S } from '../_js/ws/ws_todo.js'
import {event} from '../_js/events/event.js'
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
<style src='./_Menu-3.less' lang='less'></style>
<template src='./_Menu-4.pug'></template>
<!-- component -->
<!-- component_end -->
