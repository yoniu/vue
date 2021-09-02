<template lang="pug">
    el-form-item
        Items(
            v-for='todoObj in todos'
            :key='todoObj.id'
            :todoObj='todoObj'
        )/
        h2(v-if='!hasTodo') 暂无项目
</template>

<script>
    import Items from './Items.vue';
    export default {
        name: 'List',
        components: {Items},
        props: ['todos'],
        computed: {
            hasTodo(){
                return this.todos.length > 0;
            }
        }
    }
</script>

<style scoped>
    h2{
        color: #ccc;
    }
</style>