<template>
    <el-form-item>
        <el-input v-model="item" placeholder="请输入内容" @change="add"></el-input>
    </el-form-item>
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
    props: ["receive"],
    methods: {
        add(){
            if(!this.item.trim()) return this.$alert("内容不能为空", "错误");
            const todoObj = {
                id: nanoid(),
                title: this.item,
                done: false
            }
            this.receive(todoObj);
            this.item = null;
        }
    }
}
</script>