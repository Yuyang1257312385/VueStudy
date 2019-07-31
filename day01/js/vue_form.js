
var vm = new Vue({
    el : "#id_form",
    data : {
        textContent : "",
        multiContent : "",
        isCheck : false,
        checkArray : [],
        checkRadio : "",
        selectOption : "",
        options : [
            {text : "A", value : "One"},
            {text : "B",value : "Two"},
            {text : "C",value : "Three"}
        ],
        multiSelectOption : ["A"],
        multiOptions : [
            {text : "A", value : "One"},
            {text : "B",value : "Two"},
            {text : "C",value : "Three"}
        ],

        radioModel : "model_default",
        radioValue1 : "value_1",
        radioValue2 : "value_2",

        selectOp : "",
        number : 111,

        cbModelDefault : false,
        cbModel : "no",

        msg : "",

        age : "",
        trimContent : ""

    },
    methods: {
        changeMsg : function(){
            this.msg = this.msg+"--"
        }
    },
})