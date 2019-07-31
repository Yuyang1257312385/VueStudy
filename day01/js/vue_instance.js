
var myData = {msg : "默认数据"}


var vm = new Vue({
	el : "#id_vue_instance",
	data : myData,
	methods: {
		changeByVm : function(){
			vm.msg = "msg change by vm"
		},
		changeByMyData : function(){
			myData.msg = "msg change by myData"
		},
		
	},
});

var freezeObj = {foo : "不能修改"}

Object.freeze(freezeObj);

var freeze = new Vue({
	el : "#id_freeze",
	data : freezeObj,
	methods :{
		changeFreeze : function(){
			freezeObj.foo = "修改后的值"
		}
	}
});

var lifeCycle = new Vue({
	el:"#id_lifecycle",
	data : {
		a : "initA"
	},
	methods : {
		//注意 ： 这里调用a 需要用this
		changeA : function(){
			this.a = "changeA"
		}
	},
	created : function(){
		console.log("a is "+this.a+",lefecycle created")
	},
	mounted : function(){
		console.log("a is "+this.a+",lefecycle mounted")
	},
	updated: function(){
		console.log("a is "+this.a+",lefecycle updated")
	},
	destroyed : function(){
		console.log("a is "+this.a+",lefecycle destroyed")
	}

});

