<script context='module'>
import {RegistrationRequest} from '../_js/protos/time/auth/user/registration/proto/auth_user_RegistrationRequest_pb.js'
import {RegistrationResponse} from '../_js/protos/time/auth/user/registration/proto/auth_user_RegistrationResponse_pb.js'
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
let name
let username
let password
let password_2

let isSaving
let er
let usernameDom

function save (){
  const registrationRequest = new RegistrationRequest()
  registrationRequest.setName(name)
  registrationRequest.setUsername(username)
  registrationRequest.setPassword(password)
  const bytes = registrationRequest.serializeBinary()

  S.trigger(event.auth_user_registration, event.auth_user_logout, bytes)
}
// inst_end
</script>
<style src='./_registration-3.less' lang='less'></style>
<template src='./_registration-4.pug'></template>
<!-- component -->
<!-- component_end -->
