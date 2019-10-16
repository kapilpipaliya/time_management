<script context='module'>
//import {} from './_js/protos/time/notfound/proto/NotFoundRequest_pb.js'
//import {} from './_js/protos/time/notfound/proto/NotFoundResponse_pb.js'
import { S } from './_js/ws/ws_todo.js'
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
<script src='./__error-2-inst.js'></script>
<style src='./__error-3.less' lang='less'></style>
<template src='./__error-4.pug'></template>
<!-- component -->
<svelte:head>
	<title>{status}</title>
</svelte:head>
<!-- component_end -->
