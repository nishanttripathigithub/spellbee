<template>
  <center>
  <div v-if= "alphabet !== '-'" >
  <button @click="selectedChar(alphabet)"
  :class="getButtonClass(alphabet)"
  > {{ alphabet }} </button>
  </div>
  <div v-else>
    
 </div>
  </center>
 
  
</template>

<script>
  export default{
    props:{
      alphabet: String,
      correctAnswer: String
    },
    data(){
      return{
        selectedAlphabet:''

      }

    },
    methods:{
      selectedChar(selectedAlphabet){
        this.selectedAlphabet = this.selectedAlphabet + selectedAlphabet;
        this.$emit("InputChar",this.selectedAlphabet);
        this.selectedAlphabet = '';
        
      },
      getButtonClass(char){
        if (char===' ')
          return 'hiddenboxbox'
        else  
          return 'box'
      }

    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  background-color:rgb(41, 207, 41);
  width: 1cm;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin:0%;
  height: 1cm;
  }
.hiddenbox {
  background-color:rgb(1, 10, 1);
  width: 1cm;
  border-radius: 5px;
  padding: 10px;
  margin:0%;
  min-height: 1cm;
  max-height: 
  counter;
}
</style>
