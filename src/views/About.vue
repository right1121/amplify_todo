<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <a v-bind:href="url">GoogleのURL</a>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      msg: 'ここが本文',
      url: 'http://google.com'
    }
  }
}
</script>