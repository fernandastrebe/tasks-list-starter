<template>
  <div id="container">
    <div class="empty" v-if="tasks.length === 0">
      <b-icon class="icon" alt="Ícone vazio" icon="file-earmark-text"></b-icon>
      <p class="firstLine">Você ainda não tem tarefas cadastradas</p>
    </div>
    <div v-else class="watchTasks">
      <b-list-group class="list" v-for="item in tasks" :key="item.id">
        <b-list-group-item class="itemList">
          <input
            @click="handleConfirmTask(item.id, item.check)"
            class="form-check-input"
            type="checkbox"
            :checked="item.check ? 'checked' : '' " 
            id="flexCheckDefault"
            alt="Botão para validar a tarefa realizada"
          />
          {{ item.title }}
          <b-icon alt="Botão para excluir uma tarefa" @click="handleDeleteTask(item.id, item.title)" class="iconRemove" icon="trash"></b-icon>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListBody",
  props: {
    tasks: []
  },
  methods: {
    handleDeleteTask(id, title){
        this.$emit('deleteItem', id, title);
    },
    handleConfirmTask(id, check){
      this.$emit('confirmItem', id, check);
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 4rem;
}

.icon {
  width: 3.5rem;
  height: 3.5rem;
  margin-top: 4rem;
}

.firstLine {
  color: #808080;
  font-weight: bold;
}

.secondLine {
  color: #808080;
}

.list {
  width: 46rem;

}

.itemList {
  margin-bottom: 0.81rem;
  background-color: #58a7d4;
}

.iconEdit {
  width: 3%;
  float: right;
  color: #fff;
}

.iconRemove {
  width: 3%;
  float: right;
  color: #fff;
}

.list-group-item {
  color: #fff;
}

.watchTasks {
    margin-top: 4rem;
    display: flex;
    flex-direction: column-reverse;
}
</style>
