


$(document).ready(function(){


	$('#education_click').click(function(){
 
	
	//alert($('.left_anchor').css('visibility') + $('.education_anchor').css('visibility') );
		
		$('.education_anchor').removeClass('animated fadeIn');
		if($('.left_anchor').css('visibility')=='hidden')	
			{
				$('.left_anchor').css('visibility','visible');
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
				$('.education_anchor').css('visibility','visible')
				.delay(2000)
				.addClass('animated fadeIn');
			}
		else
			{
				
				$('.education_anchor').css('visibility','hidden');
			}

		

		});

	    
		$('#work_click').click(function(){

			$('.work_anchor').removeClass('animated fadeIn');
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
					$('.work_anchor').css('visibility','visible')
					.delay(2000)
					.addClass('animated fadeIn');;
			}
			else
			{
				
					$('.work_anchor').css('visibility','hidden');
			}
		});

	    $('#about_me_click').click(function(){

			$('.about_me_anchor').removeClass('animated fadeIn');

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
					$('.about_me_anchor').css('visibility','visible')
					.delay(2000)
					.addClass('animated fadeIn');
			}
			else
			{
				
					$('.about_me_anchor').css('visibility','hidden');
			}
		});


	  $('#skills_click').click(function(){

			$('.skills_anchor').removeClass('animated fadeIn');
			
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
					$('.skills_anchor').css('visibility','visible')
					.delay(2000)
					.addClass('animated fadeIn');
			}
			else
			{
				
					$('.skills_anchor').css('visibility','hidden');
			}
		});
		

	$(".home_button").click(function(){
	
		$('.education_anchor').css('visibility','hidden');
		$('.work_anchor').css('visibility','hidden');
		$('.left_anchor').css('visibility','visible');
		$('.skills_anchor').css('visibility','hidden');
		$('.about_me_anchor').css('visibility','hidden');
		$('.right_anchor').css('visibility','visible');
	
	});

});