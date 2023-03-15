<script>
    import * as THREE from 'three';
    import * as SC from 'svelte-cubed';

    let showMessage = false;
    let spin = 0;
    
    SC.onFrame(() => {
      spin += .01;
    });
</script>
  
<button on:click={() => showMessage = true} class="relative w-full mt-8 h-64">
  <SC.Canvas background={new THREE.Color(250, 247, 245)} >
    <SC.Mesh geometry={new THREE.TorusKnotGeometry()} rotation={[spin, spin, spin]}/>
    <SC.PerspectiveCamera  />
  </SC.Canvas>
</button>

{#if showMessage}
  <p>멋지죠? 지금 가입하세요!!!</p>
{/if}