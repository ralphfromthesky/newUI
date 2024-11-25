<template>
    <div>
        <div class="flex flex-wrap gap-2 p-2">
            <div v-for="(a, i) in tabs" :key="a.id" @click="showTabs(a.tabs, a.message, i)"
                :class="['border-2 border-[black] rounded-[.3rem] p-[1rem]', tabIndex === i? 'bg-[red] text-[white]' : '']">
                {{ a.tabs }}
            </div>

        </div>
        <div>
            <SportBettinChild :message="messages" :tabTitle="tabName"/>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, defineAsyncComponent } from 'vue'
const SportBettinChild = defineAsyncComponent(() => import('./SportBettinChild.vue'));
const messages = ref()
const tabIndex = ref(null)
const tabName = ref('')

const showTabs = (t, msg, i) => {
    tabName.value = t;
    messages.value = msg;
    tabIndex.value = i;
}

const tabs = reactive([
  { tabs: 'Adventure', id: 1, message: 'Explore new worlds and thrilling quests.' },
  { tabs: 'Science', id: 2, message: 'Discover the wonders of science and research.' },
  { tabs: 'Technology', id: 3, message: 'Stay updated on the latest tech innovations.' },
  { tabs: 'Nature', id: 4, message: 'Learn about the environment and wildlife.' },
  { tabs: 'Art', id: 5, message: 'Dive into the world of creativity and artistic expression.' },
  { tabs: 'History', id: 6, message: 'Uncover the events that shaped the world.' },
  { tabs: 'Music', id: 7, message: 'Discover new tunes and explore music genres.' },
  { tabs: 'Sports', id: 8, message: 'Stay informed on the latest sports news and scores.' },
  { tabs: 'Travel', id: 9, message: 'Find out about amazing destinations and travel tips.' },
  { tabs: 'Books', id: 10, message: 'Explore literary works and exciting book recommendations.' },
]);


</script>

<style lang="scss" scoped></style>