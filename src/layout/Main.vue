<template>
    <div class="relative">
        <div class="fixed top-0 z-10">
            <Headers/>
        </div>
        <div class="relative">
            <div class="fixed top-[6vh] flex">
                <Sidebar/>
            </div>
            <div className="text-3xl h-[100vh] flex justify-center bg-[yellow] items-center font-bold underline">
                <slot>this is default</slot>
            </div>
        </div>
        <div>
            <Footers/>
        </div>
        
</div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const Headers = defineAsyncComponent(()=> import('../components/Headers.vue'))
const Sidebar = defineAsyncComponent(() => import('../components/Sidebar.vue'))
const Footers = defineAsyncComponent(() => import('../components/Footer.vue'))
const MainBody = defineAsyncComponent(() => import('../components/MainBody.vue'))
</script>

<style lang="scss" scoped>

</style>