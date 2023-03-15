<script>
  import CreatePost from '$lib/CreatePost.svelte';
  import Post from '$lib/Post.svelte';
  import Error from '$lib/Error.svelte';
  import { signOut, getUser } from '$lib/services';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';

  export let posts, error;

  const user = getUser();

  if (browser && !user){
    goto('/login');
  }

  const handleSignout = async() => {
    await signOut();
    goto('/login');
  }
</script>
  
  
<header class="flex justify-between">
  <h1 class="text-2xl">Qwitter에 오신 걸 환영합니다!</h1>
  <button on:click={handleSignout} class="btn">Logout</button>
</header>
<CreatePost />

<Error {error} />
{#each posts || [] as post}
  <Post {...post} />
{:else}
  No posts found!
{/each}