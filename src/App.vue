<template>

  <div id="app">
		<center>
			<h1 class="Q">
			{{ question }}
			</h1>
    <div class="wrapper">
		
    <Spell
		v-for="(a, index) in alphabets" :key ="index" :alphabet="a" 
		:correctAnswer="correctAnswer"
		@InputChar="checkIfcorrect"	
		/>
		
    </div>

    
	<div v-if= "attemptsAvailable !== 0" >
	<center> Your have {{ this.attemptsAvailable }} attempts</center>
    </div>
	<div>
    <CheckAnswer v-bind="correctAnswer"
			:passedChartoChkAns="passedChar" 
			:correctAnswercheck="correctAnswer"
		/>
    </div>
		</center>
  </div>
  
</template>

<script>
import Spell from './components/Spell.vue'
import CheckAnswer from './components/CheckAnswer.vue'

export default {
  name: 'App',
  components: {
    Spell,
    CheckAnswer
	},
	data(){
		return{
			//alphabets :'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
			alphabets :'-1234567890---QWERTYUIOP---ASDFGHJKL----ZXCVBNM,./',
			correctAnswer: "",
			passedChar: '',
			selectedString: '',
			question:'',
			attemptsAvailable:0
			}
	},
	mounted: function(){

		fetch('https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple',{
          method:'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) =>{
		this.question = (jsonData.results[0].question).toUpperCase();
		this.correctAnswer = (jsonData.results[0].correct_answer).toUpperCase();
		this.attemptsAvailable = (this.removeDuplicateCharacters(this.correctAnswer)).length + 3;
		
	})

			// this.question = "Prime Minister of India";
			// this.correctAnswer = "NARENDRA MODI"
	},
	methods:{
		checkIfcorrect(variable){
			this.passedChar = variable;
			this.selectedString = this.selectedString + this.passedChar;
			this.alphabets=this.alphabets.replace(this.passedChar, ' ');
		},
		removeDuplicateCharacters(string){
			return string
			.split('')
			.filter(function(item, pos, self) {
			return self.indexOf(item) == pos;
			})
			.join('');
}
	}

}
</script>

<style>

.wrapper {
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
.Q{
	border-radius: 25px;
	background: rgb(11, 20, 3);
	padding: 20px;
	width: fit-content;
	height: auto; 
	color: whitesmoke;
}
.Q2{
	border-radius: 25px;
	background: rgb(11, 20, 3);
	padding: 20px;
	width: fit-content;
	height: auto; 
	color: whitesmoke;
}

</style>
