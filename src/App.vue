<script setup>
    import { ref } from 'vue';
    /* import PublicationViewAll from './components/publication/PublicationViewAll.vue'; */

    import {RouterView} from 'vue-router'
    import NavigationBar from './components/navigation/NavigationBar.vue';

    const color = ref('grey')

    /* const toggleColor = () => {
        color.value = color.value === 'grey' ? 'pink' : 'grey'
    } */
</script>

<template>
    <NavigationBar></NavigationBar>
    <router-view></router-view>
    <!-- <button @click="toggleColor">Vaihda väriä</button> -->
    <!-- <PublicationViewAll></PublicationViewAll> -->
</template>

<style>
/* styleen tehdyt css elementit ovat käytössä kaikissa dokumenteissa*/

.primary-color {
    background-color: v-bind(color);
}
  
</style>
