<script setup>

    import { ref } from 'vue';  
    import { RouterView } from 'vue-router'
    import BaseLayout from './components/layout/BaseLayout.vue';

    const color = ref('grey')

</script>

<template>
    <BaseLayout>
        <router-view></router-view>
    </BaseLayout>    
</template>
