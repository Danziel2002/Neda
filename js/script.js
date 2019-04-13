let other,hovered=0;

$(document).ready(function(){

	$('img').width($(window).width()/2);
	$('img').height($(window).height());
	

	$('div').hover(function(){
		if(hovered == 0){
			if($(this).attr('rel') == '.cage'){
			$($(this).attr('rel') + ' img').css({
				position: 'relative',
				left: '25%',
				'box-shadow': '10px 4px 43px 2000px rgba(0,0,0,0.75)'

			},1000, 'linear');
			hovered = 1;
			}else if($(this).attr('rel') == '.instinct'){
				$($(this).attr('rel') + ' img').css({
				position: 'relative',
				right: '25%',
				'box-shadow': '10px 4px 43px 2000px rgba(0,0,0,0.75)'
			},1000, 'linear');
			hovered = 1;
			}
	}else{
			if($(this).attr('rel') == '.cage'){
			$($(this).attr('rel') + ' img').css({
				left: '0',
				'box-shadow': 'none'
			},1000, 'linear');
			}else if($(this).attr('rel') == '.instinct'){
				$($(this).attr('rel') + ' img').css({
				right: '0',
				'box-shadow': 'none'

			},1000, 'linear');
			}

		hovered = 0;
	}
	})
});
