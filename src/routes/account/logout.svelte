<script context='module'>
import {LogoutRequest} from '../_js/protos/time/account/logout/proto/account_LogoutRequest_pb.js'
import {LogoutResponse} from '../_js/protos/time/account/logout/proto/account_LogoutResponse_pb.js'
import { Ws } from '../_js/ws/ws_todo.js'
import {event} from '../_js/events/event.js'
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
// inst_end
</script>
<style src='./_logout-3.less' lang='less'></style>
<template src='./_logout-4.pug'></template>
<!-- component -->
<!-- component_end -->
