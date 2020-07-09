<template>
  <div id="todos">
    <table>
      <tr>
        <th>名前</th>
        <th>説明</th>
      </tr>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.name }}</td>
        <td>{{ todo.description }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import { listTodos } from '@/graphql/queries.js'

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
    }
  }
}
</script>