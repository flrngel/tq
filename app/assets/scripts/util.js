define(['date'],function(){
	return {
		"format": function() {
			var formatted = arguments[0];
			for (var i = 1; i < arguments.length; i++) {
				var regexp = new RegExp('\\{'+(i-1)+'\\}', 'gi');
				formatted = formatted.replace(regexp, arguments[i]);
			}
			return formatted;
		},
		"calc": function(date,term){
			var date_end=(new Date(date)).addMonths(parseInt(term));
			var dday=Math.floor((date_end.getTime()-(new Date()).getTime())/(24*60*60*1000));
			return {
				"dday": dday,
				"date_end": date_end
			};
		}
	};
});
