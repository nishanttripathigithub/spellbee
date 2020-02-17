<template>
    <div><br>   <br>
    
  <button v-for="(i, index) in completedString" :key="index" @click.stop
  :class="getAnserButtonClass(i)">{{ i }} </button>
</div>

</template>

<script>
  export default{
    props:{
        passedChartoChkAns: String,
        correctAnswercheck: String
    },
    data(){
        return{
            SelectedAnwer: '',
            i: 0,
            indices:[],
            completedString: ''
        }
    },
    watch:{
        passedChartoChkAns: function(){
             if (this.correctAnswercheck.indexOf(this.passedChartoChkAns)>-1) {
                  this.findallIndexes(this.correctAnswercheck, this.passedChartoChkAns );
            }
        },
        correctAnswercheck: function(){
              var str = '';
          for(var a=0; a<this.correctAnswercheck.length; ++a) {
            if (this.correctAnswercheck[a] == " ")
              str = str + " ";
            else
              str = str + "_";
            }
           
            console.log(str);
            this.completedString = str ;
        }
    },
    methods:{
        findallIndexes(source, find) {
          //var str = String(this.$totalcorrect);
          var str = this.completedString
        for(var k=0;k<source.length; ++k) {
          if (source.substring(k, k + 1) == find) 
          {
            console.log('before assignment completed String-->>' + this.completedString);
            this.completedString = str.substr(0,k) + find + str.substr(k+1, str.length)
            str = this.completedString;
          }
          else if (source.substring(k, k + 1) == " "){
              this.completedString = str.substr(0,k) + " " + str.substr(k+1, str.length)
              str = this.completedString;
          }
       
        }
  this.$totalcorrect = this.completedString;
  console.log ( 'this.$totalcorrect=>=>=>=>' + this.$totalcorrect);
},
   getAnserButtonClass(char){
        if (char===' ')
          return 'hide'
        else  
          return 'box'
      }
    }
 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper1{
	width:fit-content;
	align-self: center;
	display: grid;
	grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px ;
	grid-gap: 2px;
	background-color: rgb(238, 143, 34);
	color: rgb(12, 12, 11);	
	border-radius: 25px;
	width: 32%
}
.box {
  background-color:rgb(41, 207, 41);
  width: 1cm;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin:0%;
  height: 1cm;
  }
  .hide {
    height: 0cm;
    border: none;
    background-color: white;
}
</style>
