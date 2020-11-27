<template>
  <div id="app">
    <div class="show">
      <div class="result">{{ result }}</div>
      <div class="enter">{{enter==='' ? 0 : enter}}</div>
    </div>
    <div class="keyboard">
      <Keyboard v-for="item in keys" :value="item"></Keyboard>
    </div>

  </div>
</template>

<script>
import Keyboard from "./components/keyboard.vue";
export default {
  name: "App",
  components :{
    Keyboard
  },
  data() {
    return {
      keys: [
        'c', '+', '-', '*',
        '7', '8', '9', '/',
        '4', '5', '6', '0',
        '1', '2', '3', '=',
      ]
    }
  },
  computed: {
    result() {
      return this.$store.state.result;
    },
    enter() {
      return this.$store.state.enter;
    }
  }
}
</script>

<style scoped>
#app{
  width: 400px;
  background:#FFE4E1;
}
.result{
  font-size: 30px;
  padding:60px;
  text-align: right;
}
.enter{
  font-size: 20px;
  margin: 10px auto;
  padding:0 60px 20px 0;
  text-align: right;
}


</style>