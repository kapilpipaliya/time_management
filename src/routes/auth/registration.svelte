<script context='module'>
import {RegistrationRequest} from '../_js/protos/time/auth/user/registration/proto/auth_user_RegistrationRequest_pb.js'
import {RegistrationResponse} from '../_js/protos/time/auth/user/registration/proto/auth_user_RegistrationResponse_pb.js'
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
<script src='./_registration-2-inst.js'></script>
<style src='./_registration-3.less' lang='less'></style>
<template src='./_registration-4.pug'></template>
<!-- component -->
<!-- component_end -->
