<template>
    <div>
        <div class="container">
            <div class="inputList">
                <b-form-input v-model="text" placeholder="Adicione uma nova lista"></b-form-input>
            </div>
            <div class="buttonList">
                <b-button class="button">Criar <b-icon  class="addIcon" icon="plus-circle"></b-icon></b-button>
            </div>
        </div>
    <!-- <hr/> -->
    </div>
</template>

<script>
export default {
  name: 'InputList',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    display: flex;
    align-content: center;
    width: 736px;
    margin-top: -20px;
}

.inputList {
    width: 638px;
    margin-right: 8px;
    
}

.buttonList {
    width: 90px;
}

.button {
    background-color: #1E6F9F;
}

.addIcon {
    width: 16px;
    height: 16px;
    margin-bottom: 2px;
}

/* hr {
    display: flex;
    color: black;
    width: 736px;
    
} */

</style>
