<template>
<div class="template" @click="getValue" :data-value="value" >{{ value }}</div>
</template>

<script>
export default {
  name: "keyboard",
  props: ["value"],
  methods: {
    getValue(event) {
      //获取当前的按键的值
      let val = event.target.dataset.value;
      //通过commit提交mutation
      this.$store.commit('calculate', val);
    }
  }
}
</script>

<style scoped>
.template{
  background:#FFF8DC;
  width:100px;
  height:120px;
  display: inline-block;
  font-size: 30px;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
  line-height:120px;
  color:#7A378B;
}
.template:nth-child(1){
  color:red;
}
.template:last-child{
  background:#C6E2FF;
}
</style>