<script context='module'>
import {UserListRequest as Req} from '../../../_js/protos/time/admin/user/user/list/proto/admin_user_user_ListRequest_pb.js'
import {UserListResponse as Res} from '../../../_js/protos/time/admin/user/user/list/proto/admin_user_user_ListResponse_pb.js'
import { Ws } from '../../../_js/ws/ws_todo.js'
import {event} from '../../../_js/events/event.js'
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
import { onMount, onDestroy } from "svelte";

import {Table, Th, Tr, Pagination} from '../../../_components/svelte-table/src/index.js'
let data = []
let filters = {
   login: {value: '', keys: ['login', 'firstname']}
}

let pageSize = 5
let totalPages = 1
let currentPage = 1
const fetch = () => {
  const req = new Req()
  const bytes = req.serializeBinary()

  Ws.trigger(event.admin_user_user_list, 0, bytes)
}
fetch()
onMount(()=>{
  Ws.bind(event.admin_user_user_list, 0, 1, (bytes) => {
    const res = Res.deserializeBinary(bytes)
    switch (res.getStatus()) {
      case Res.ErrorStatus.OK:
        data = JSON.parse(res.getJson()).user
        console.log(data.user)
        break;
      case Res.ErrorStatus.UNAUTHORISED:
        err(res.getErrorMsg())
        break
      default:
        err(res.getErrorMsg())
        break;
    }
  })
})
onDestroy(()=> {
  Ws.unbind(event.admin_user_user_list, 0)
})


// inst_end
</script>
<style src='./_index-3.less' lang='less'></style>
<template src='./_index-4.pug'></template>
<!-- component -->
<!-- component_end -->
