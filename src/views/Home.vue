<template>
  <div id="home">
    <Header />
    <InputList :lists="lists" :titleChanged="titleChanged" @refreshTitle="handleInsertList" @changeTitle="handleChangeTitle" />
    <ListsBody :lists="lists" @deleteItem="handleDeleteList" @setTitle="handleSetTitle" />
  </div>
</template>

<script>
import Header from "../components/HeaderPage.vue";
import InputList from "../components/InputList.vue";
import ListsBody from "../components/ListsBody.vue";
import api from "../service/api";

export default {
  name: "HomeList",
  components: {
    Header,
    InputList,
    ListsBody,
  },
  data() {
    return {
      lists: [],
      titleChanged: '',
      idTitleChanged: ''
    };
  },
  async mounted() {
    await this.getAllList();
  },
  methods: {
    async handleInsertList(title) {
      try {
        await api.post("/lists", { title });
        await this.getAllList();
      } catch (error) {
        alert(error);
      }
    },
    async getAllList() {
      try {
        const { data } = await api.get("/lists");
        this.lists = data;
      } catch (error) {
        alert(error);
      }
    },
    async handleDeleteList(id) {
      try {
        await api.delete(`/lists/${id}`);
        await this.getAllList();
      } catch (error) {
        alert(error);
      }
    },
    async handleSetTitle(id){
      this.lists.filter(list => {
        if (list.id === id){
          this.titleChanged = list.title;
          this.idTitleChanged = id;
        }
      })
    },
    async handleChangeTitle(title){
      try {
        await api.put(`/lists/${this.idTitleChanged}`, {title});
        await this.getAllList();
        this.titleChanged = '';
        this.idTitleChanged = '';
      } catch (error) {
        alert(error);
      }
    }
  }
};
</script>

<style scoped>
</style>
