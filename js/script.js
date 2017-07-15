$(document).ready(function(){
	$('#education_click').click(function(){
	
	
	//alert($('.left_anchor').css('visibility') + $('.education_anchor').css('visibility') );

		if($('.left_anchor').css('visibility')=='hidden')	
			{
				$('.left_anchor').  animate({'visibility':'visible'});
			}
		else
			{
				$('.left_anchor').animate({'visibility':'hidden'});
			}
		
		if($('.education_anchor').animate('visibility')=='hidden')	
			{
				$('.education_anchor').animate({'visibility':'visible'});
			}
		else
			{
				
				$('.education_anchor').animate({'visibility':'hidden'});
			}

		});

	$('.home_button').click(function(){
		$('.left_anchor').css('visibility','visible');
		$('.education_anchor').css('visibility','hidden');
	});

});