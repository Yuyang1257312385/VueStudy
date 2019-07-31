

var template = new Vue({
	el : "#id_template",
	data : {
		rawHtml : "<span style='color:red'>this should be red<span>",
		number : 10,
		ok : false,
		msg : "hello vue world",
		show : true,
		url : "https://www.baidu.com"
	},
	methods : {
		changeShow : function(){
			this.show = !this.show
		}
	}
	
});
