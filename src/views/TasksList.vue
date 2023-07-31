<template>
  <div id="tasksList">
    <Header />
    <InputTasks :tasks="tasks" @insertTask="handleInsertTask" />
    <TasksBody
      :tasks="tasks"
      @deleteItem="handleDeleteTask"
      @confirmItem="handleConfirmTask"
    />
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
    async handleInsertTask(title) {
      try {
        await api.post("/tasks", {
          title,
          listId: this.idList,
          check: false,
        });
        await this.getTasks();
      } catch (error) {
        alert(error);
      }
    },
    async handleDeleteTask(id, title) {
      try {
        if (confirm("Você realmente quer excluir a tarefa: " + title + "?")) {
          await api.delete(`/tasks/${id}`);
          await this.getTasks();
        }
      } catch (error) {
        alert(error);
      }
    },
    async handleConfirmTask(id, check) {
      try {
        await api.patch(`/tasks/${id}`, {
          check: !check,
        });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped>
</style>
