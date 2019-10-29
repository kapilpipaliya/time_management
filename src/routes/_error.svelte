<script context='module'>
//import {} from './_js/protos/time/notfound/proto/NotFoundRequest_pb.js'
//import {} from './_js/protos/time/notfound/proto/NotFoundResponse_pb.js'

import {event} from './_js/events/event.js'

</script>
<script>
// inst
export let status;
export let error;
const dev = process.env.NODE_ENV === 'development';
// inst_end
</script>
<template src='./__error-4.pug'></template>
<!-- component -->
<svelte:head>
	<title>{status}</title>
</svelte:head>
<!-- component_end -->
