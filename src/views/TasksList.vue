<template>
  <div id="tasksList">
    <Header />
    <InputTasks :tasks="tasks" />
    <TasksBody :tasks="tasks" />
  </div>
</template>

<script>
import Header from "../components/HeaderPage.vue";
import InputTasks from "../components/InputTasks.vue";
import TasksBody from "../components/TasksBody.vue";
import api from "../service/api";

export default {
  name: "TasksList",
  components: {
    Header,
    InputTasks,
    TasksBody,
  },
  data() {
    return {
      tasks: [],
      idList: Number,
    };
  },
  async mounted() {
    await this.getTasks();
    
  },
  methods: {
    async getTasks() {
      try {
        this.idList = this.$route.params.id;
        console.log(this.idList);
        const { data } = await api.get("/tasks", {
          params: {
            listId: this.idList,
          },
        });
        this.tasks = data;
        // console.log(this.tasks);
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped>
</style>
