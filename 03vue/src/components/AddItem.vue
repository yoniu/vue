<template lang="pug">
    el-form-Item
        el-input(
            v-model='item'
            placeholder='请输入内容后回车'
            @change='add'
        )/
</template>

<script>
    import {nanoid} from "nanoid"
    export default {
        name: 'AddItem',
        data() {
            return {
                item: null
            }
        },
        methods: {
            add(){
                if(!this.item.trim()) return this.$alert("内容不能为空", "错误");
                const todoObj = {
                    id: nanoid(),
                    title: this.item,
                    done: false
                }
                this.$emit('receive', todoObj);
                this.item = null;
            }
        }
    }
</script>