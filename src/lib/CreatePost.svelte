<script>
  import UploadImage from '$lib/UploadImage.svelte';
  import Error from '$lib/Error.svelte';
  import { createPost, getUser } from '$lib/services';

  let file = null;
  let postContent = '';
  let createPostPromise = Promise.resolve({});

  const handleCreatePost = () => {
    createPostPromise = createPost({user: getUser().email, content: postContent, imageFile: file});
  };
</script>

<form class="form-control" on:submit|preventDefault={handleCreatePost}>
  <label for="post" class="label">
    <span class="label-text text-xl">무엇을 올리시겠습니까?</span>
  </label> 
  <UploadImage bind:file />
  <textarea bind:value={postContent} id="post" required class="textarea h-24 textarea-bordered"></textarea>
  {#await createPostPromise}
    <button disabled type="button" class="btn">게시물 올리기</button> 
  {:then {data, error}}
    <button class="btn">게시물 작성!</button>
    {#if data}
      <strong class="text-green-600">게시물 작성 완료!</strong>
    {/if}
    <Error {error} /> 
  {/await}
</form>
