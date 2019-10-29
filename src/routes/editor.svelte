 <script>
  import { onMount } from 'svelte';

  let editor

  onMount(async () => {
    const EditorJS = await  import('@editorjs/editorjs');
    const editor = new EditorJS.default('codex-editor', {
      holderId: 'codex-editor'
    });
  });

</script>
<div id="codex-editor"/>
