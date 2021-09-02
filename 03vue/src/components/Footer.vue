<template lang="pug">
    el-form-item(v-if='total > 0')
        li
            span
                input(
                    type='checkbox'
                    :checked='allCheck'
                    @change='allChecked'
                )/
                span 已完成 {{doneTotal}} / 全部 {{total}}
            el-button(
                type='danger'
                @click='deleteDone'
            ) 清空已完成
</template>

<script>
    export default {
        name: 'Footer',
        props: ["todos", "deleteDoneEx"],
        computed: {
            total(){
                return this.todos.length
            },
            doneTotal(){
                return this.todos.reduce((pre,current) => {
                    return pre + (current.done ? 1 : 0)
                }, 0)
            },
            allCheck(){
                return this.doneTotal === this.total && this.total > 0
            }
        },
        methods: {
            allChecked(e){
                this.$emit('checkAll', e.target.checked);
            },
            deleteDone(){
                this.$confirm("是否删除已完成项目？", "提示", {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    this.$emit('deleteDoneEx');
                });
            }
        },
    }
</script>

<style scoped>
    .el-form-item{
        margin-bottom: 0;
    }
    li{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
</style>