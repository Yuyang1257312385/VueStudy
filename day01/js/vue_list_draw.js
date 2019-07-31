Vue.component("todo-item",{
    template : `
        <li>
            {{title}}
            <button v-on:click="$emit('remove')">Remove</button>
        </li>
    `,
    props:['title']
})


var vm = new Vue({
    el : "#id_array",
    data : {
       who : "white",
       items: [
           {content : "study html"},
           {content : "study css"},
           {content : "study vue"},
           {content : "work html"},
           {content : "work css"},
           {content : "work vue"}
       ],
       testArray:[0,1,2,3,4,5,6,7],
       book : {
           author : "李白",
           title : "静夜思",
           publishDate : "大唐天宝三载"
       },
       //记住 是 : 不是= 不是= 不是=
       //不是= 不是= 不是= 不是= 不是= 不是=
       todoContent : "",
       todoId : 3,
       todos : [
           {id:0,content:"study html"},
           {id:1,content:"study css"},
           {id:2,content:"study js"}
       ]
    },
    computed: {
        testArr : function(){
            return this.testArray
        },
        sliceArray3 : function(){
            return this.testArray.slice(3)
        },
        sliceArray_2 : function(){
            return this.testArray.slice(-2)
        },
        sliceArray2And5 : function(){
            return this.testArray.slice(2,5)
        }
    },
    methods: {
        pushItem : function(){
            this.items.push({content : "pushContent"})
        },
        popItem : function(){
            this.items.pop()
        },
        reverseItem : function(){
            this.items.reverse()
        },
        filterWorkItem : function(){
            this.items = this.items.filter(it => it.content.indexOf("work") != -1)
        },
        filterStudyItem : function(){
            this.items = this.items.filter(it => it.content.indexOf("study")!=-1)
        },
        concatItem : function(){
            this.items = this.items.concat({content : "concatContent"})
        },
        addNewTodo : function(){
            if(this.todoContent === ""){
                return
            }
            this.todos.push({id:this.todoId++,content:this.todoContent})
            this.todoContent = ""
        }
    },
})