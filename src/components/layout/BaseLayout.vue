<script setup>

import NavigationBar from '../navigation/NavigationBar.vue';

</script>

<template>
    <div class="nav">
        <NavigationBar></NavigationBar>
    </div>
    <div class="container">
        <slot></slot>  
    </div>
</template>