<template>
  <div id="todo-create">
    <TodoForm/>
    <button>登録</button>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'

export default {
  components: {
    TodoForm
  }
}
</script>