<script>
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { getUser, signIn } from '$lib/services';
  import Error from '$lib/Error.svelte';
  import Cubed from '$lib/Cubed.svelte';

  import supabase from "../../lib/supabase";

  const user = getUser();

  if (browser && user)
    goto('/');

  let email = 'svelteTest@test.com';

  let signInPromise = Promise.resolve({});

  const handleSignIn = () => {
      signInPromise = signIn({email});
  }
</script>

{#await signInPromise}
  {email}로 링크 보내는 중!
{:then {data, error}}
  <Error {error} />
  {#if data}
    <strong class="text-green-600">{email}에 대한 링크를 성공적으로 보냈습니다!</strong>
  {:else}
    <form class="form-control" on:submit|preventDefault={handleSignIn}>
      <label for="email" class="label">
        <span class="label-text text-4xl">Qwitter에 로그인!</span>
      </label> 
      <div class="relative">
        <input bind:value={email} id="email" type="email" placeholder="Email" required class="w-full pr-16 input input-primary input-bordered"> 
        <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">링크 받기!</button>
      </div>
    </form>
  {/if}
{/await}

<Cubed />