<template>
  <div id="todo">
    <TodoForm
      :name="name"
      :description="description"
      @updateName="updateName"
      @updateDescription="updateDescription"
    />
    <button @click="update">登録</button>
  </div>
</template>


<script>
import TodoForm from '@/components/TodoForm.vue'
import { API } from 'aws-amplify'
import { getTodo } from '@/graphql/queries'
import { updateTodo } from '@/graphql/mutations'

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
  created: async function() {
    await this.getTodo(this.$route.params.id)
  },
  methods: {
    async getTodo(id) {
      const todoData = await API.graphql({
        query: getTodo,
        variables: {
          'id': id
        }
      })
      this.name = todoData.data.getTodo.name
      this.description = todoData.data.getTodo.description
    },
    updateName(value) {
      this.name = value
    },
    updateDescription(value) {
      this.description = value
    },
    async update() {
      const { name, description } = this

      const todo = {
        id: this.$route.params.id,
        name,
        description
      }

      await API.graphql({
        query: updateTodo,
        variables: {input: todo}
      })
      this.name = ''
      this.description = ''
      this.$router.push('/list')
    }
  }
}
</script>