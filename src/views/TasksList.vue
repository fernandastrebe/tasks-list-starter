<template>
  <div id="tasksList">
    <Header/>
    <InputTasks/>
    <TasksBody/>
    
  </div>
</template>

<script>
import Header from '../components/HeaderPage.vue'
import InputTasks from '../components/InputTasks.vue'
import TasksBody from '../components/TasksBody.vue'


export default {
  name: 'TasksList',
  components: {
    Header,
    InputTasks,
    TasksBody
  }
}
</script>

<style scoped>

</style>
