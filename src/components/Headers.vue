<template>
  <div class="bg-[red]">
    <div className="text-3xl w-[100vw] flex justify-center items-center font-bold underline">
      Headers
    </div>
    <div class="flex justify-center gap-[3rem]">
      <div v-for="(a, i) in links" :key="a.link" :class="isActive === i ? 'border-b-[.2rem] border-[black]' : ''" @click="showNavLink(i)">
        <router-link :to="a.link">
          {{ a.title }}
        </router-link>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useStore} from '../store/store.js'
const store = useStore()
const isActive = ref(store.state.tabIndexing.navLink)

const showNavLink = (i) => {
  store.commit('setnavLink', i)
  isActive.value = i;
  if(i === 'newPage') {
    
  }
  
}
const links = ref([
  { title: 'Product', link: '/product' },
  { title: 'Contact', link: '/contact' },
  { title: 'About', link: '/about' },
  { title: 'Other Page', link: '/newPage' },

])

</script>

<style lang="scss" scoped></style>