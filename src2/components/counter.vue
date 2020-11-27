<template>
  <div>
    <div>当前任务-2:{{ curTodo.name }}</div>
    <p>今天完成了{{ doneTodosCount}}件事情</p>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">{{todo.name}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "counter",
  computed:{
    doneTodos(){
      return this.$store.getters.doneTodos
    },
    doneTodosCount(){
      return this.$store.getters.doneTodosCount
    },
    curTodo(){
      return this.$store.getters.getTodoById(3)
    }
  }
}
</script>

<style scoped>

</style>