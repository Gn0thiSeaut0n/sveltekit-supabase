<script>
  export let file;

  const getFile = e => {
    file = !!e.target.files.length && e.target.files[0];
  }
</script>

<input on:change={getFile} class="input" type="file">