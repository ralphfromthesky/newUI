<template>
    <div>
        <div>
            <NewHeader />
        </div>
        <div class="h-[95vh]">
            <!-- <transition name="zoom-fade" appear>
        

            </transition> -->
            <slot>no data</slot>


        </div>
        <div>
            <NewFooter />
        </div>

    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';


const NewHeader = defineAsyncComponent(() => import('../components/NewPageComponent/Headers.vue'))
const NewFooter = defineAsyncComponent(() => import('../components/NewPageComponent/Footers.vue'))
</script>

<style lang="scss" scoped></style>