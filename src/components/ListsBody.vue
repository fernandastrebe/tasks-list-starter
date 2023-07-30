<template>
    <div id="container">
        <div class="empty" v-if="lists.length === 0">
            <b-icon class="icon" alt="Ícone vazio" icon="file-earmark-text"></b-icon>
            <p class="firstLine">Você ainda não tem listas cadastradas</p>
            <p class="secondLine">Crie listas e organize seus itens a fazer</p>
        </div>
        <div v-else class="watchList">
            <b-list-group class="list" v-for="item in lists" :key="item.id" >
                <b-list-group-item class="itemList"> <span @click="handleSendToTasks(item.id)">{{ item.title }}</span>
                    <b-icon class="iconEdit" @click="handleSetTitle(item.id)" alt="Ícone editar" icon="pencil"></b-icon>
                    <b-icon class="iconRemove" @click="handleDeleteList(item.id, item.title)" alt="Ícone remover" icon="trash"></b-icon>
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListBody',
  props: {
    lists: []
  },
  methods: {
    handleDeleteList(id, title){
        this.$emit('deleteItem', id, title);
    },
    handleSetTitle(id){
        this.$emit('setTitle', id);
    },
    handleSendToTasks(id){
        this.$router.push({ name: 'tasksList', params: { id }})
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
    display: flex;
    flex-direction: column;
    width:100%;
    align-items: center;
}

.icon {
    width: 3.5rem;
    height: 3.5rem;
}

.empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
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
    cursor: pointer;
    align-items: center;
    
}

.itemList:hover {
    background-color: #58a7d495;
    transition: 0.5s;
    transform: translate(1rem, 0);
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

.watchList {
    margin-top: 4rem;
    display: flex;
    flex-direction: column-reverse;
}

a {
    text-decoration: none;
    color: #fff;
}

</style>
