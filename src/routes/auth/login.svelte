<script context='module'>
import {LoginRequest} from '../_js/protos/time/auth/user/login/proto/auth_user_LoginRequest_pb.js'
import {LoginResponse} from '../_js/protos/time/auth/user/login/proto/auth_user_LoginResponse_pb.js'
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
<style src='./_login-3.less' lang='less'></style>
<template src='./_login-4.pug'></template>
<!-- component -->
<!-- component_end -->
