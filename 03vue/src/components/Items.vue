<template lang="pug">
    li
        span
            input(
                :id='todoObj.id'
                type='checkbox'
                :checked='todoObj.done'
                @change='checkMyTodo(todoObj.id)'
            )/
            label(:for='todoObj.id') {{todoObj.title}}
        el-button(
            type='danger'
            @click='deleteMyTodo(todoObj.id)'
        ) 删除
</template>

<script>
    export default {
        name: 'Items',
        props: ["todoObj"],
        methods: {
            checkMyTodo(id){
                this.$bus.$emit('checkTodo', id);
            },
            deleteMyTodo(id){
                this.$confirm("是否删除？", "提示", {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    this.$bus.$emit('deleteTodo', id);
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
        padding-bottom: .3rem;
        border-bottom: 1px solid #f0f0f0;
    }
    li .el-button{
        display: none;
    }
    li:hover .el-button{
        display: inline-block;
    }
</style>