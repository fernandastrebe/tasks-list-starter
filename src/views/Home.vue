<template>
  <div id="home">
    <Header/>
    <InputList :lists="lists" @refreshArrayList="setList" />
    <ListsBody :lists="listsCopy" />
  </div>
</template>

<script>
import Header from '../components/HeaderPage.vue'
import InputList from '../components/InputList.vue'
import ListsBody from '../components/ListsBody.vue'
import api from '../service/api';

export default {
  name: 'HomeList',
  components: {
    Header,
    InputList,
    ListsBody
  },
  data(){
    return {
      lists: [],
      listsCopy: []
    }
  },
  async mounted() {
      try {
        const { data } = await api.get('/lists');
        this.lists = data;
        
      } catch (error) {
          alert(error);
      }
    },
    methods: {
      setList(listsCopy) {
        this.lists = [...listsCopy];
        console.log(this.lists);
      }
    }
}
</script>

<style scoped>

</style>
