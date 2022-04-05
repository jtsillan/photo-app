<script setup>

import { reactive, ref } from 'vue';
import PublicationView from './PublicationView.vue';
/* import PublicationCreate from './PublicationCreate.vue'; */


const publications = ref([])

const state = reactive({
    error: false
})


const getAllPublications = async () => {

    try {
        const response = await fetch('https://juhaniguru-web-nosql-python.onrender.com/api/publications')
        const data = await response.json()
        
        if(response.status > 300){
            if (response.status === 404) {
                throw new Error("Dataa ei löytynyt")
            }
            throw new Error(data.msg)

        }
        publications.value = data.publications

    } catch (e) {
        console.error(e) // .log tai .warn tulostaa consoleen eri värillä
        state.error = true
    }
}

getAllPublications()


</script>

<template>    
    <div v-if="state.error">
        Valitettavasti postauksia ei ollut juuri nyt saatavilla
    </div>
    <template v-else>
        <div  class="container">            
            <!-- <PublicationCreate></PublicationCreate> -->    
            <div class="item primary-color" v-for="publication in publications">        
                <PublicationView :publication="publication"></PublicationView>
            </div>
        </div>
    </template>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: rgb(197, 194, 194); */
    margin: 20px;
}

</style>
