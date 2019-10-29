<script>
  import tippy from './_components/sveltejs-tippy/src/App.svelte';

  const props = {
    content: "<span class='tooltip'>Styled tooltip text</span>",
    placement: "bottom"
  };
</script>

<style>
  main {
    text-align: center;
  }
  button {
    background: #ff8833;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
  }
  :global(.tooltip) {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
</style>

<main>
	<h1>sveltejs-tippy</h1>
	<button use:tippy={{props}}>
    Hover me
  </button>
</main>