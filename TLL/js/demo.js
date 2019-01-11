$(function(){
	(function(){
		for(var i = 1900; i<=2019; i ++){
			$('#year').append('<option>'+i+'</option>')
		}
		for(var i = 1; i<=12; i ++){
			$('#month').append('<option>'+i+'</option>')
		}
		setDay(31)
		var day30 = [4,6,9,11];
		var day31 = [1,3,5,7,8,10,12];
		$('#month').change(setData)
		$('#year').change(setData)
		function setDay(num){
			for(var i = 1; i<=num; i ++){
				$('#day').append('<option>'+i+'</option>')
			}
		}
		function setData(){
			var flog30 = $.inArray(parseInt($('#month').val()),day30);
			var flog31 = $.inArray(parseInt($('#month').val()),day31);
			if(flog30 != -1){
				setDay(30)
			}else if(flog31 != -1){
				setDay(31)
			}else{
				if($('#year').val()%4 == 0&&$('#year').val()%100 != 0 || $('#year').val() % 400 == 0){
					setDay(29)
				}else{
					setDay(28)
				}
			}
		}
	})()
})
