<script setup>

import PublicationView from './PublicationView.vue';
import { publicationService } from '../../services/publicationService'
import { RouterLink } from 'vue-router';

import { ref } from "vue";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

let publications = ref([]);
let page = 1;

const load = async ($state) => {

    const { data, error } = await publicationService.useGetByPage(page)
    
    if (error.value) {
        $state.error();
    }
    if (data.value.publications.length < 5) {
        $state.complete();
    }
    else {
        publications.value.push(...data.value.publications);
        $state.loaded();
    }
    page++;

}

</script>

<template>
    <h1>Julkaisut</h1>
    <div class="result" v-for="publication in publications" :key="publication._id">
        <router-link :to="`/publication/${publication._id}`">
                <PublicationView :publication="publication"></PublicationView>
        </router-link>
    </div>
    <InfiniteLoading :publications="publications" @infinite="load"></InfiniteLoading>
</template>

