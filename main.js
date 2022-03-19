const app= new Vue({
    el:'#app',
    data:{
        content:"",
        listCount:'0',
        todoList:[]
    },
    methods:{
        addItem: function(content){
            if(content.trim()!=""){
                this.todoList.push({
                    text:this.content.trim(),
                    done:false
                });
                this.content="";
            }
            else
                alert('Write somthing');
        },
        removeItem: function(index){
            this.todoList.splice(index,1);
        }
    }

})