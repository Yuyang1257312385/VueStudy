
var condition = new Vue({
	el : "#id_condition",
	data : {
		awsome : false,
		type : "A",
		loginType : "userName",
		isShow : true
	},
	methods : {
		changeAwsome : function(){
			this.awsome = !this.awsome
		},
		changeLoginType : function(){
			if(this.loginType === "userName"){
				this.loginType = ""
			}else {
				this.loginType = "userName"
			}
		},
		changeShow : function(){
			this.isShow = !this.isShow
		}
	}
});