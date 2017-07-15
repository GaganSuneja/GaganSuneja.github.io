$(document).ready(function(){


	$('#education_click').click(function(){
	
	
	//alert($('.left_anchor').css('visibility') + $('.education_anchor').css('visibility') );
		
		if($('.left_anchor').css('visibility')=='hidden')	
			{
				$('.left_anchor').css('visibility','visible')
			}
		else
			{
				$('.left_anchor').css('visibility','hidden');
			}
		
		
		if($('.work_anchor').css('visibility')=='visible')
			{
				$('.work_anchor').css('visibility','hidden');
			}
		

		if($('.education_anchor').css('visibility')=='hidden')
			{
				$('.education_anchor').css('visibility','visible');
			}
		else
			{
				
				$('.education_anchor').css('visibility','hidden');
			}

		

		});

	    
		$('#work_click').click(function(){

			if($('.left_anchor').css('visibility')=='hidden')	
			{
					$('.left_anchor').css('visibility','visible')
			}
			else
			{
					$('.left_anchor').css('visibility','hidden');
			}
		
			if($('.education_anchor').css('visibility')=='visible')
			{
				$('.education_anchor').css('visibility','hidden');
			}

			if($('.work_anchor').css('visibility')=='hidden')
			{
				$('.work_anchor').css('visibility','visible');
			}
			else
			{
				
				$('.work_anchor').css('visibility','hidden');
			}
		});

	    $('#about_me_click').click(function(){

			if($('.right_anchor').css('visibility')=='hidden')	
			{
					$('.right_anchor').css('visibility','visible')
			}
			else
			{
					$('.right_anchor').css('visibility','hidden');
			}
		
			if($('.skills_anchor').css('visibility')=='visible')
			{
				$('.skills_anchor').css('visibility','hidden');
			}

			if($('.about_me_anchor').css('visibility')=='hidden')
			{
				$('.about_me_anchor').css('visibility','visible');
			}
			else
			{
				
				$('.about_me_anchor').css('visibility','hidden');
			}
		});


	  $('#skills_click').click(function(){

			if($('.right_anchor').css('visibility')=='hidden')	
			{
					$('.right_anchor').css('visibility','visible')
			}
			else
			{
					$('.right_anchor').css('visibility','hidden');
			}
		
			if($('.about_me_anchor').css('visibility')=='visible')
			{
				$('.about_me_anchor').css('visibility','hidden');
			}

			if($('.skills_anchor').css('visibility')=='hidden')
			{
				$('.skills_anchor').css('visibility','visible');
			}
			else
			{
				
				$('.skills_anchor').css('visibility','hidden');
			}
		});
		

	$("#home_button_click").click(function(){
	
		$('.education_anchor').css('visibility','hidden');
		$('.work_anchor').css('visibility','hidden');
		$('.left_anchor').css('visibility','visible');
		$('.skills_anchor').css('visibility','hidden');
		$('.about_me_anchor').css('visibility','hidden');
		$('.right_anchor').css('visibility','visible');
	
	});

});