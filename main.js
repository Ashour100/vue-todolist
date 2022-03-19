// Lo Scopo del bonus: Cambiare il modo in cui la lista viene ordinata

const app= new Vue({
    el:'#app',
    data:{
        content:"",
        todoList:[],
        reverseTodo:[],
        doneList:[]
    },
    methods:{
        addItem: function(content){
            if(content.trim()!=""){
                this.todoList.push({
                    text:this.content.trim(),
                    done:false
                });
                this.content="";
                this.reverseTodo=this.todoList.slice().reverse();
                console.log(this.reverseTodo);
            }
            else
                alert('Write somthing');
        },
        removeItemFromUnDone: function(index){
            this.reverseTodo.splice(index,1);
            this.todoList=this.reverseTodo.slice().reverse();
        },
        removeItemFromDone: function(index){
            this.doneList.splice(index,1);
        },
        statusUpdateFromUnDone:function(index){
            this.doneList.push({
                text:this.reverseTodo[index].text,
                done:true
            });
            this.reverseTodo.splice(index,1);
            this.todoList=this.reverseTodo.slice().reverse();
        },
        statusUpdateFromDone: function(index){
            this.todoList.push({
                text:this.doneList[index].text,
                done:false
            });
            this.doneList.splice(index,1);
            this.reverseTodo=this.todoList.slice().reverse();
        },
    }
})
