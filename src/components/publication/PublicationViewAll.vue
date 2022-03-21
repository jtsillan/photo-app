<script setup>

import { ref } from 'vue';


    const publications = ref([])

    const getAllPublications = async () => {

        const responce = await fetch('https://juhaniguru-web-nosql-python.onrender.com/api/publications')
        const data = await responce.json()

        publications.value = data.publications
    }
    
    getAllPublications()

</script>

<template>

<div class="container">
  <div class="item" v-for="publication in publications">
        <!-- {{ publication.url }} -->

        {{ publication.title }}
        <img :src="publication.url">
    </div>
</div>
    
  

</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(197, 194, 194);
    margin: 20px;
}

img {
    width: 400px;
    margin: 20px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
