<template>
  <div id="todo-create">
    <TodoForm
      :name="name"
      :description="description"
      @updateName="updateName"
      @updateDescription="updateDescription"
    />
    <button @click="create">登録</button>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
import { API } from 'aws-amplify'
import { createTodo } from '@/graphql/mutations'

export default {
  components: {
    TodoForm
  },
  data() {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    updateName(value) {
      this.name = value
    },
    updateDescription(value) {
      this.description = value
    },
    async create() {
      const { name, description } = this

      const todo = {
        name,
        description
      }

      await API.graphql({
        query: createTodo,
        variables: {input: todo}
      })
      this.name = ''
      this.description = ''
    }
  }
}
</script>