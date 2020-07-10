<template>
  <div id="todoes">
    <table>
      <tr>
        <th>名前</th>
        <th>説明</th>
      </tr>
      <tr v-for="(todo, index) in todos" :key="todo.id">
        <td>{{ todo.name }}</td>
        <td>{{ todo.description }}</td>
        <td><button @click="pushEdit(todo.id)">変更</button></td>
        <td><button @click="deleteTodo(todo.id, index)">削除</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import { listTodos } from '@/graphql/queries'
import { deleteTodo } from '@/graphql/mutations'

export default {
  data() {
    return {
      todos: []
    }
  },
  created: function() {
    this.listTodos()
  },
  methods: {
    async listTodos() {
      const todoData = await API.graphql({
        query: listTodos
      })
      this.todos.push(...this.todos, ...todoData.data.listTodos.items)
    },
    pushEdit(id) {
      this.$router.push({ name: 'Todo', params: { id } })
    },
    async deleteTodo(id, index) {
      await API.graphql({
        query: deleteTodo,
        variables: {
          input: {
            'id': id
          }
        }
      })
      this.todos.splice(index, 1)
    }
  }
}
</script>