<template>
  <div id="app">
    <Header/>
    <InputList/>
    <ListsBody/>
  </div>
</template>

<script>
import Header from './components/HeaderPage.vue'
import InputList from './components/InputList.vue'
import ListsBody from './components/ListsBody.vue'

export default {
  name: 'App',
  components: {
    Header,
    InputList,
    ListsBody
  }
}
</script>

<style scoped>

</style>
