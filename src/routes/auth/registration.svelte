<script context='module'>
import {RegistrationRequest} from '../_js/protos/time/auth/user/registration/proto/auth_user_RegistrationRequest_pb.js'
import {RegistrationResponse} from '../_js/protos/time/auth/user/registration/proto/auth_user_RegistrationResponse_pb.js'
import { S } from "../_js/ws/ws_todo.js"
export async function preload(page, session) {
  S.setupConnection(this.req, this.res)
  return {}
}
</script>
<script src='./_registration-2-inst.js'></script>
<style src='./_registration-3.less' lang='less'></style>
<template src='./_registration-4.pug'></template>
<!-- manual_part -->
<!-- manual_part_end -->
