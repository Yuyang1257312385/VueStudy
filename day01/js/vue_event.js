var eventVm = new Vue({
    el : "#id_event",
    data : {
        clickCount : 0
    },
    methods: {
        greet : function(event){
            alert("hello vue")
            if(event){
                alert(event.target.tagName)
            }
        },
        say : function(msg){
            alert(msg)
        },
        warn : function(msg,event){
            if(event) event.preventDefault();
            // if(event) alert(event.target.tagName);
            alert(msg)
        },
        clickOut : function(){
            alert("click out")
        },
        clickInner : function(){
            alert("click inner")
        },
        clickWhichKey : function(msg){
            alert(msg)
        },
        clickWhich : function(event){
            alert(event.keyCode)
        }
    },
})