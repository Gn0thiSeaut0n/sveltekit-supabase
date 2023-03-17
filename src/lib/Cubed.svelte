<script>
    import * as THREE from 'three';
    import * as SC from 'svelte-cubed';

    let showMessage = false;
    let spin = 0;
    let scale = 0;
    
    SC.onFrame(() => {
      spin += .02;
      if( scale < 2)
        scale += .005;
    });
</script>
  
<button on:click={() => showMessage = true} class="relative w-full mt-8 h-64">
  <SC.Canvas background={new THREE.Color(255, 255, 255)}>
    <SC.Mesh geometry={new THREE.BoxGeometry()} rotation={[spin, spin, spin]} scale={[scale, scale, scale]}/>
    <SC.PerspectiveCamera/>
  </SC.Canvas>
</button>

{#if showMessage}
  <p>멋지죠? 지금 가입하세요!!!</p>
{/if}