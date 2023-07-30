<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <div class="container">
        <router-link to="/">
          <div class="buttonReturnArea">
            <b-button class="button"
              ><b-icon class="returnIcon" icon="arrow-left"></b-icon
            ></b-button>
          </div>
        </router-link>
        <div class="inputList">
          <b-form-input v-model="title" placeholder="Adicione uma nova tarefa"></b-form-input>
        </div>
        <div class="buttonList">
          <b-button class="button" type="submit"
            >Criar <b-icon class="addIcon" icon="plus-circle"></b-icon
          ></b-button>
        </div>
      </div>
    </b-form>
    <!-- <hr/> -->
  </div>
</template>

<script>
export default {
  name: "InputTasks",
  data(){
    return{
        title: '',
    }
  },
  methods: {
    onSubmit(){
        if(this.title !== ""){
            this.$emit('refreshTitle', this.title);
            this.title = '';
        }
        else {
            alert('Digite o nome da tarefa que quer criar! :D');
            return;
        }

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  align-content: center;
  width: 46rem;
  margin-top: -1.25rem;
}

.inputList {
  width: 36.63rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.buttonList {
  width: 5.63rem;
}

.button {
  background-color: #1e6f9f;
}

.addIcon {
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.13rem;
}

/* hr {
    display: flex;
    color: black;
    width: 736px;
    
} */
</style>
