requirejs.config({
	baseUrl: "/assets/scripts",
	shim: {
		"bootstrap":["jquery"]
	},
	paths: {
		"jquery": "//code.jquery.com/jquery-1.10.2.min",
		"jqueryui": "http://code.jquery.com/ui/1.10.3/jquery-ui.min",
		"bootstrap": "/assets/scripts/bootstrap.min"
	}
});

require(["slowscript","jquery"],function(slowscript){
	slowscript();
});
