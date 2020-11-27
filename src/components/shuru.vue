<template>
<div><input type="text" id="height"></div>
  <div><input type="text" id="weight"></div>

</template>

<script>
export default {
  name: "shuru",
  methods: {
    goTest(){
      let hei =document.querySelector('#height').value
      let wei =document.querySelector('#weight').value
      let bmi = eval(wei/(hei*hei))
      if(bmi <18){
        let hea = '偏瘦'
      }
      else if(bmi <24){
        let hea = '正常'
      }
      else{
        let hea = '偏胖'
      }
      this.$store.commit("getbmi",bmi)
      this.$store.commit("gethealth",hea)
    }
  }
}
</script>

<style scoped>

</style>