<script src='./__error-1-ctx.js' context='module'></script>
<script src='./__error-2-inst.js'></script>
<style src='./__error-3.less' lang='less'></style>
<template src='./__error-4.pug'></template>
<!-- manual_part -->

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

<!-- manual_part_end -->
