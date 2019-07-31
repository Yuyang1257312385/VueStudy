Vue.component("button_counter",{
    data : function(){
        return {
            count : 0
        }
    },
    //注意 ： ``在IE下并没有被支持
    template : `
    <button v-on:click="count++">
        you have click {{count}} times
    </button>
    `
})

Vue.component("blog",{
    props : ["blog_title","blog_author"],
    template : "<p>{{blog_title}} by {{blog_author}}</p>"
})

Vue.component("album",{
    props : ["song"],
    template : `
        <div>
            <h4>{{song.title}}</h4>
            <button v-on:click="$emit('large')">放大字体</button>
            <button v-on:click="$emit('small')">缩小字体</button>
            <button v-on:click="$emit('large_fix',0.5)">增大0.5</button>
            <button v-on:click="$emit('small_fix')">缩小参数大小</button>
            <button v-on:click="song.supportCount += 1">{{song.supportCount}}</button>
            <p>{{song.author}}</p>
            <p>{{song.date}}</p>
            <p>{{song.lrc}}</p>
        </div>
    `
})

Vue.component("auto_album",{
    data : function(){
        return {
            textSize : 2
        }
    },
    props : ["song"],
    template : `
        <div :style="{ fontSize: textSize + 'em' }">
            <h4>{{song.title}}</h4>
            <button v-on:click="textSize += 0.2">放大字体</button>
            <button v-on:click="textSize -= 0.2">缩小字体</button>
            <p>{{song.author}}</p>
            <p>{{song.date}}</p>
            <p>{{song.lrc}}</p>
            <p>{{song.supportCount}}</p>
        </div>
    `,
})

Vue.component("custom_input",{
    props : ["value"],
    template : `
    <input 
        v-bind:value="value"
        v-on:input="$emit('input',$event.target.value)">
    `
})

Vue.component("slot_comp",{
    template: `
    <div>
    <strong>Error : </strong>
    <slot></slot>
    </div>
    `
})

Vue.component("tab_home",{template : "<div>this is home</div>"})
Vue.component("tab_menu",{template : "<div>this is menu</div>"})
Vue.component("tab_order",{template : "<div>this is order</div>"})


var vmWidget = new Vue({
    el : "#id_widget",
    data : {
        songFontSize : 2,
        blogs:[
            {id:0,title:"博客一",author:"明公"},
            {id:1,title:"博客二",author:"小白"},
            {id:2,title:"博客三",author:"乔工"}
        ],
        songs:[
            {id:0,title:"年少有为",author:"李荣浩",date:"2018-01-01",lrc:"假如我年少有为知进退",supportCount:0},
            {id:0,title:"青花瓷",author:"周杰伦",date:"2018-02-02",lrc:"素胚勾勒出青花",supportCount:0}
        ],
        searchText : "",
        currentTab : "Home",
        tabs : ["Home","Menu","Order"]

    },
    computed: {
        currentComponent : function(){
            return "tab_"+this.currentTab.toLowerCase()
        }
    },
    methods: {
        onLarge : function(){
            this.songFontSize = this.songFontSize+0.1;
        },
        onSmall : function(){
            this.songFontSize = this.songFontSize - 0.1;
            if(this.songFontSize < 1){
                alert("不能再小了")
                this.songFontSize = 1;
            }
        },
        smallFix : function(fix){
            this.songFontSize -= fix;
        }
    },
})