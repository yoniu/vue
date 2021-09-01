<template>
  <div id="app">
    <el-form @submit.native.prevent>
      <AddItem :receive="receive"/>
      <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
      <Footer :todos="todos" :checkAll="checkAll" :deleteDoneEx="deleteDoneEx"/>
    </el-form>
  </div>
</template>

<script>
import AddItem from './components/AddItem.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    AddItem,
    List,
    Footer
  },
  data(){
    return {
        todos: [
            {id: 1, title: '学习', done: true},
            {id: 2, title: '吃饭', done: false},
            {id: 3, title: '睡觉', done: false},
        ]
    }
  },
  methods: {
    receive(obj){
      this.todos.unshift(obj);
      this.$message({
        type: 'success',
        message: '添加成功'
      });
    },
    checkTodo(id){
      this.todos.forEach( i => {
        if(i.id === id) i.done = !i.done;
      });
    },
    deleteTodo(id){
      this.todos = this.todos.filter(i => i.id !== id);
      this.$message({
        type: 'success',
        message: '删除成功'
      });
    },
    checkAll(bool){
      this.todos.forEach((i) => {
        i.done = bool
      });
    },
    deleteDoneEx(){
      this.todos = this.todos.filter(i => i.done !== false);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 600px;
  margin: 60px auto 0;
  margin-top: 60px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  padding: 10px;
}
</style>
