<template>
  <div id="todo-create">
    <TodoForm
      :name="name"
      :description="description"
      @updateName="updateName"
      @updateDescription="updateDescription"
    />
    <button>登録</button>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'

export default {
  components: {
    TodoForm
  },
  data: function () {
    return {
      name: null,
      description: null
    }
  },
  methods: {
    updateName(value) {
      this.name = value
    },
    updateDescription(value) {
      this.description = value
    },
  }
}
</script>