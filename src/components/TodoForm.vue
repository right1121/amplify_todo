<template>
  <div id="todo-form">
    <div>
      <label>名前:</label>
      <input
        type="text"
        name="name"
        id="name"
        :value="name"
        v-on:input="updateName"
      >
    </div>
    <div>
      <label>説明:</label>
      <input
        type="text"
        name="description"
        id="description"
        :value="description"
        v-on:input="updateDescription"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String
  },
  methods: {
    updateName: function(e) {
      this.$emit("updateName", e.target.value)
    },
    updateDescription: function(e) {
      this.$emit("updateDescription", e.target.value)
    }
  }
}
</script>