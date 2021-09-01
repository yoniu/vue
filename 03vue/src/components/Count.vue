<template>
    <div>
        <h2>Current times: {{ times }}</h2>
        <button @click="times++">Add up</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data(){
        return {
            times: 0
        }
    }
}
</script>