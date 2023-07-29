<template>
    <div id="container">
        <div>
            <b-icon class="icon" icon="file-earmark-text"></b-icon>
        </div>
        <div>
            <p class="firstLine">Você ainda não tem listas cadastradas</p>
        </div>
        <div>
            <p class="secondLine">Crie listas e organize seus itens a fazer</p>
        </div>
        <b-list-group class="list">
            <b-list-group-item class="itemList">Mercado <b-icon class="iconEdit" icon="pencil"></b-icon></b-list-group-item>
            <b-list-group-item class="itemList">Trabalho <b-icon class="iconEdit" icon="pencil"></b-icon></b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
  name: 'ListBody',
  props: {
    
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
    width: 56px;
    height: 56px;
    margin-top: 64px;
}

.firstLine {
    color: #808080;
    font-weight: bold;
}

.secondLine {
    color: #808080;
}

.list {
    width: 736px;
}

.itemList {
    margin-bottom: 13px;
    background-color: #58a7d4;
    
}

.iconEdit {
    width: 3%;
    float: right;
    color: #fff;
}

.list-group-item {
    color: #fff;
}
</style>
