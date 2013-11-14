require(["util","jquery","jqueryui","sprintf"],function(util,$){
	$(function(){
		function fx(){
			if( $("#date_start").val().length == 0 ) return;
			var data=util.calc($("#date_start").val(),$("input[name=target]:checked").val());
			$("#date_end").val(util.format("{0}-{1}-{2}",data['date_end'].getFullYear(),sprintf("%02d",data['date_end'].getMonth()+1),sprintf("%02d",data['date_end'].getDate())));
			$("#dday").val(util.format("{0} 일 남음..",data['dday']));
		}

		$(".dt").datepicker({
			dateFormat: 'yy-mm-dd',
			onSelect: fx
		});
		$(".bind").change(fx);
		$(".dt").prop("disabled",false);
	});
});
