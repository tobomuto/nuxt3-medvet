<template>
    <button @click="emitEvent">
        <slot />
    </button>
</template>

<script>
export default {
    methods: {
        emitEvent() {
            this.$emit('handle-click', {})
        }
    }
}
</script>

<style lang="scss" scoped>


</style>