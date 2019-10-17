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
import { goto } from '@sapper/app'
import { onMount, onDestroy } from "svelte";
let name
let username
let password
let password_2

let isSaving
let er = ''
let usernameDom
let passwordDom
$: disabled = !name || !username || !password || !password_2 || isSaving || (password != password_2);

const err = (msg) => {
  er = msg
  setTimeout(() => er = "", 4000);
}

function save (){
  er = ""
  const registrationRequest = new RegistrationRequest()
  registrationRequest.setName(name)
  registrationRequest.setUsername(username)
  registrationRequest.setPassword(password)
  const bytes = registrationRequest.serializeBinary()

  S.trigger(event.auth_user_registration, 0, bytes)
}
onMount(()=>{
  S.bind(event.auth_user_registration, 0, 1, (bytes) => {
    isSaving = false;
    const res = RegistrationResponse.deserializeBinary(bytes)
    switch (res.getStatus()) {
      case RegistrationResponse.ErrorStatus.OK:
        const token = res.getToken()
        document.cookie = `time=${token}; path=/`;
        // Todo: save cookie on context (and indexdb).
        goto('/admin/dashboard')
        break;
      case RegistrationResponse.ErrorStatus.INVALID_USERNAME:
        err(res.getErrorMsg())
        usernameDom.focus()
        break
      case RegistrationResponse.ErrorStatus.WEAK_PASSWORD:
        err(res.getErrorMsg())
        passwordDom.focus()
        break
      default:
        err(res.getErrorMsg())
        break;
    }
  })
onDestroy(()=> {
  S.unbind(event.auth_user_registration, 0)
})
})

// inst_end
</script>
<style src='./_registration-3.less' lang='less'></style>
<template src='./_registration-4.pug'></template>
<!-- component -->
<!-- component_end -->
