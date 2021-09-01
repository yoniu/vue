<template>
    <li>
        <span>
            <input
                :id="todoObj.id"
                type="checkbox"
                :checked="todoObj.done"
                @change="checkMyTodo(todoObj.id)"
            />
            <label :for="todoObj.id">{{todoObj.title}}</label>
        </span>
        <el-button type="danger" @click="deleteMyTodo(todoObj.id)">删除</el-button>
    </li>
</template>

<script>
export default {
    name: 'Items',
    props: ["todoObj","checkTodo","deleteTodo"],
    methods: {
        checkMyTodo(id){
            this.checkTodo(id);
        },
        deleteMyTodo(id){
            this.$confirm("是否删除？", "提示", {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(() => {
                this.deleteTodo(id);
            });
        }
    }
}
</script>

<style scoped>
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    li .el-button{
        display: none;
    }
    li:hover .el-button{
        display: inline-block;
    }
</style>