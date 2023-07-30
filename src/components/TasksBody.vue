<template>
    <div id="container">
        <div>
            <b-icon class="icon" icon="file-earmark-text"></b-icon>
        </div>
        <div>
            <p class="firstLine">Você ainda não tem tarefas cadastradas</p>
        </div>
        <b-list-group class="list">
            <b-list-group-item class="itemList">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                 Mercado 
                <b-icon class="iconRemove" icon="trash"></b-icon>
            </b-list-group-item>
            <b-list-group-item class="itemList">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                 Trabalho 
                <b-icon class="iconRemove" icon="trash"></b-icon>
            </b-list-group-item>
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
</style>
