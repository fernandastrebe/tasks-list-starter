<template>
  <div class="header">
     <h1 class="to">to</h1>
     <h1 class="do">do</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  background-color: #B0E0E6;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.to {
  color: #fff;
  font-weight: bold;
  font-size: 60px;
}

.do {
  color: #1E6F9F;
  font-weight: bold;
  font-size: 60px;
}

</style>
