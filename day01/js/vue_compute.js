
var comp = new Vue({
	el : "#id_compute_watch",
	data : {
		msg : "hello world",
		firstName : "Jim",
		lastName : "Green",
	},
	computed : {
		reverseMsg : function(){
			return this.msg.split(" ").reverse().join(" ")
		},
		fullName : function(){
			return this.firstName + " "+this.lastName
		},
		//get 和 set 方法 
		getSetFullName : {
			get : function(){
				return this.firstName + " "+this.lastName
			},
			set : function(newValue){
				var names = newValue.split(" ");
				this.firstName = names[0];
				this.lastName = names[1]
			}
		}
	},
	methods : {
		reverseMsgMethod : function(){
			this.msg = this.msg.split(" ").reverse().join(" ")
		},
		setFullName : function(){
			this.getSetFullName = "Tom Blank"
		}
	}
});


var watch = new Vue({
	el : "#id_watch",
	data : {
		question : "",
		answer : "i cant give anser until ask"
	},
	watch:{
		//question发生改变时，这个函数会被执行
		question : function(newQ,oldQ){
			this.answer = "waiting for typing"
			this.debouncedGetAnswer()
		}
	},
	created : function(){
		this.debouncedGetAnswer = _.debounce(this.getAnswer,500)
	},
	methods : {
		getAnswer : function(){
			if(this.question.indexOf("?") === -1){
				this.answer = "必须有 ？"
				return
			}
			this.answer = "thinking"
			//注意 ： 必须在此处将this赋值给vm,在下面获取到的this并不是该Vue对象
			var vm = this
			
			
			axios.get('https://yesno.wtf/api')
				.then(function(response){
					
					vm.answer = _.capitalize(response.data.answer)
					
//					if(vm === this){
//						vm.answer = "vm === this"
//					}else {
//						//会执行这里
//						vm.answer = "vm ！== this"
//					}
				}).catch(function(error){
					vm.answer = "have some error "+ error
				})
//				
			
		}
	}
	
});