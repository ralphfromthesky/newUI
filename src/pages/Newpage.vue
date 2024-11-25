<template>
    <NewPage>
        <div class="bg-[pink] colorNow flex flex-col h-[100%] p-1]">
            <div class="flex flex-grow">
                <div class="flex-none border-r-2 p-1 border-[black]">
                    <div v-for="(a, i) in linkLabel" :class="isActive === i ? 'border-l-[.4rem] border-[black]' : ''"
                        :key="a.id" @click="showMessage(a.msg, i)">
                        {{ a.title }}
                    </div>

                </div>
                <div class="relative w-[100%]">
                    <div class="flex-1 p-1 border-2 border-[red] absolute top-0" v-if="index !== 9">
                        {{ message }}

                    </div>
                    <div class="">
                        <transition name="zoom-fade" appear>
                            <SportBetting v-if="index === 9" />

                        </transition>
                    </div>
                </div>

                <!-- <component :is="componentIndex === 9 ? <SportBetting/> : '' "></component> -->

            </div>
        </div>

    </NewPage>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
const message = ref('')
import { useStore } from '../store/store';

const SportBetting = defineAsyncComponent(() => import('./sportBetting/SportBetting.vue'))
const store = useStore()
const index = ref()
const componentIndex = ref()


const linkLabel = ref([
    { title: 'Casino', msg: 'ano daw sabi mo', id: 1 },
    { title: 'Gambling', msg: 'magsugal na tau', id: 2 },
    { title: 'Slot Machine', msg: 'scatter mga lodi', id: 3 },
    { title: 'Poker', msg: 'All in or fold?', id: 4 },
    { title: 'Roulette', msg: 'Red or black? Spin it!', id: 5 },
    { title: 'Blackjack', msg: '21 is the magic number!', id: 6 },
    { title: 'Craps', msg: 'Roll the dice and take a chance!', id: 7 },
    { title: 'Bingo', msg: 'Eyes down for a full house!', id: 8 },
    { title: 'Keno', msg: 'Pick your numbers, win big!', id: 9 },
    { title: 'Sports Betting', msg: 'Bet on your favorite team today!', id: 10 },
]);

const showMessage = (msg, i) => {
    message.value = msg;
    isActive.value = i;
    store.commit('setstateTabIndexing', i)
    index.value = i;
    componentIndex.value = i;
}
const isActive = ref(store.state.tabIndexing.tabIndex)

</script>

<style lang="scss" scoped></style>