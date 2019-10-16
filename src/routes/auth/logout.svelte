<script context='module'>
import {LogoutRequest} from '../_js/protos/time/auth/user/logout/proto/auth_user_LogoutRequest_pb.js'
import {LogoutResponse} from '../_js/protos/time/auth/user/logout/proto/auth_user_LogoutResponse_pb.js'
import { S } from '../_js/ws/ws_todo.js'
// ctx_import
// ctx_import_end
export async function preload(page, session) {
S.setupConnection(this.req, this.res)
// export
// export_end
}
// ctx
// ctx_end
</script>
<script src='./_logout-2-inst.js'></script>
<style src='./_logout-3.less' lang='less'></style>
<template src='./_logout-4.pug'></template>
<!-- component -->
<!-- component_end -->
