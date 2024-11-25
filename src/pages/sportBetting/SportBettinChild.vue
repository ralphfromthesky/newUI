<template>
    <div>
        <div class="text-center mt-[3rem]">
            <div :class="[props.tabTitle ? 'border-b-2 border-t-2 border-[gray]' : '', 'p-2 m-2']">
                {{ props.tabTitle }}
            </div>

            <div >
                {{ props.message }}

            </div>

        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    message: {
        type: String,
        required: true,
        default: ''
    },
    tabTitle: {
        type: String,
        required: true,
        default: 'title'
    }
})



</script>

<style lang="scss" scoped>

</style>