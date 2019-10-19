<script>
import {MenuRequest} from '../_js/protos/time/menu/proto/MenuRequest_pb.js'
import {MenuResponse} from '../_js/protos/time/menu/proto/MenuResponse_pb.js'
import { S } from '../_js/ws/ws_todo.js'
import {event} from '../_js/events/event.js'

// inst
import { onMount, onDestroy } from "svelte";
S.setupConnection()
export let menu_name
let menu_data = []
onMount(()=>{
  const menuRequest = new MenuRequest()
  menuRequest.setName(menu_name)
  const bytes = menuRequest.serializeBinary()
  S.trigger(event.menu, 0, bytes)


  S.bind(event.menu, 0, 1, (bytes) => {
    const res = MenuResponse.deserializeBinary(bytes)
    menu_data = JSON.parse(res.getJson()).menu
    console.log(menu_data)
  })
})
onDestroy(()=> {
  S.unbind(event.menu, 0)
})
// inst_end
</script>
<style src='./_Menu-3.less' lang='less'></style>
<template src='./_Menu-4.pug'></template>
<!-- component -->
<!-- component_end -->
