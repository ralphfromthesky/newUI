<template>
    <div class="bg-[yellow] text-center flex justify-between">
        <button @click="goBack">BACK</button> <div @click="store.commit('setstateTabIndexing', 10)"> New header layout {{ store.state.tabIndexing.tabIndex }}</div> <div></div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
const router = useRouter()

const goBack = () => {
    window.history.back()
}
</script>

<style lang="scss" scoped>

</style>