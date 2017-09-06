'use strict';

(function(){

	var Question = function(QuestionText,Answer,Options)
	{
		this.QuestionText =  QuestionText;
		this.Answer       =  Answer;
		this.Options      =  Options;
	}
	
	Question.prototype.IsAnswerCorrect = function(Answer)
	{
			console.log("Answer is ",Answer);

			console.log("Answer in Question is",Questions[QuizApp.CurrentQuestionIndex].Answer);

			return (Answer ==Questions[QuizApp.CurrentQuestionIndex].Answer) ;
	}


	Question.prototype.SelectAnswer = function(Answer)
	{
		
		if(this.IsAnswerCorrect(Answer) == true)
		{
			QuizApp.Score++;
			
			console.log("Score is ",QuizApp.Score);
		}

		QuizApp.CurrentQuestionIndex++;	
		
		console.log(Quiz);
	
		QuizApp.DisplayNextQuestion();
	
	}

	var Questions = [
					
						 new Question("Capital Of India","Delhi",["Delhi","Hydrabad","Mumbai","Chennai"]),
						 new Question("Current Prime Minister","Modi",["Modi","Hydrabad","gurgaon","Tamil"]),
						 new Question("Your mother name","Delhi",["Delhi","Hydrabad","Naghpur","Fatehabad"])
					
					];


	var Quiz = function(Questions)
	{
			this.Score = 0;
			this.CurrentQuestionIndex = 0;
			this.Questions = Questions;
	}

	Quiz.prototype.GetCurrentQuestionIndex = function()
	{
		return this.CurrentQuestionIndex;
	}
	
	 Quiz.prototype.DisplayNextQuestion = function()
	{
			
			
			document.getElementById('score').innerHTML = "Your Score is "+ this.Score;
			
			console.log(document.getElementById('QuestionText'));
			
			console.log("CurrentQuestionIndex",this.CurrentQuestionIndex);

			console.log("Question is",this.Questions[this.CurrentQuestionIndex].QuestionText);
			
			document.getElementById('QuestionText').innerHTML = this.Questions[this.CurrentQuestionIndex].QuestionText;
			
			this.Options = document.getElementsByClassName('style_button');

			console.log(this.Options);

			this.NewOptions = Array.prototype.slice.call(this.Options);

			this.OptionIndex = 0;

			console.log(this.Questions[this.CurrentQuestionIndex].Options.length);
			
			this.OptionsLength = this.Questions[this.CurrentQuestionIndex].Options.length;
				
				

			for(this.i=0;this.i<this.OptionsLength;this.i++)
			{
				this.NewOptions[this.i].innerHTML = this.Questions[this.CurrentQuestionIndex].Options[this.i] ;
			}

	}	



	
	var QuizApp = new Quiz(Questions);	
	
	QuizApp.DisplayNextQuestion();
	
	


	var button1 = document.getElementById("Option1");
	
	button1.onclick = function()
	{
		Question.prototype.SelectAnswer(button1.innerHTML);
	}

	var button2 = document.getElementById("Option2");
	
	button2.onclick = function()
	{
		Question.prototype.SelectAnswer(button2.innerHTML);
	}

	var button3 = document.getElementById("Option3");

	button3.onclick = function()
	{
		Question.prototype.SelectAnswer(button3.innerHTML);
	}

	var button4 = document.getElementById("Option4");

	console.log(button4);

	button4.onclick = function()
	{
		Question.prototype.SelectAnswer(button4.innerHTML);
	}
	
})();