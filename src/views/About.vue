<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <div>
      <a v-bind:href="url">GoogleのURL</a>
    </div>
    <button v-on:click='indicateMessage'>クリックするとメッセージを表示</button>
    <button @click='abbreviation'>省略記票</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      msg: 'ここが本文',
      url: 'http://google.com'
    }
  },
  methods: {
    // ES5の()=>だとthisが使えない
    indicateMessage: function() {
      alert('メッセージを表示')
    },
    abbreviation: function() {
      alert(this.msg)
    }
  }
}
</script>