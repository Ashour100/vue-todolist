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
                this.listCount++;
            }
            else
                alert('Write somthing');
        },
        removeItem: function(index){
            this.todoList.splice(index,1);
            this.listCount--;
        },
        statusUpdate: function(index){
            if(this.listCount>=1)
            this.todoList[index].done=!this.todoList[index].done;
        }
        }
})
