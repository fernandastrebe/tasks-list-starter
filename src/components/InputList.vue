<template>
    <div>
        <b-form @submit.prevent="onSubmit"> 
            <div class="container">
                <div class="inputList">
                    <b-form-input v-model="title" placeholder="Adicione uma nova lista"></b-form-input>
                </div>
                <div class="buttonList">
                    <b-button class="button" type="submit" v-if="!titleChanged">Criar <b-icon class="addIcon" icon="plus-circle"></b-icon></b-button>
                    <b-button class="button" @click="handleChangeTitle" v-else>Alterar</b-button>
                </div>
            </div>
        </b-form>
    <!-- <hr/> -->
    </div>
</template>

<script>


export default {
  name: 'InputList',
  props: {
    lists: [],
    titleChanged: String
  },
  data(){
    return{
        title: '',
    }
  },
  methods:{
    onSubmit(){
        if(this.title !== ""){
            this.$emit('refreshTitle', this.title);
            this.title = '';
        }
        else {
            alert('Digite o nome da lista que quer criar! :D');
            return;
        }

    },
    handleChangeTitle(){
        this.$emit('changeTitle', this.title);
    }
  },
  watch: {
    titleChanged: {
        immediate:true,
        handler(value) {
            this.title = value;
            
        }
        }
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
    cursor: pointer;
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
