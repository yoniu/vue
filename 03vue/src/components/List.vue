<template>
    <el-form-item>
        <Items
            v-for="todoObj in todos"
            :key="todoObj.id"
            :todoObj="todoObj"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
        />
        <h2 v-if="!hasTodo">暂无项目</h2>
    </el-form-item>
</template>

<script>
    import Items from './Items.vue';
    export default {
        name: 'List',
        components: {Items},
        props: ['todos','checkTodo',"deleteTodo"],
        computed: {
            hasTodo(){
                console.log(this.todos.length > 0);
                return this.todos.length > 0;
            }
        }
    }
</script>