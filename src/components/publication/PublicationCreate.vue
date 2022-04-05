<script setup>

import { computed, reactive } from 'vue';


const publicationData = reactive({
    title: '',
    description: '',
    url: '',
    visibility: 2, // tarkoittaa julkista postausta, määritykset ei yleismaailmallisia
    tags: []
})

const goodExtension = ['jpg', 'jpeg', 'gif', 'png', 'webp']

const isDataValid = computed(() =>{
    // tarkistetaan sekä https että http
    const newUrlValidation = publicationData.url.startsWith("https://")
    const oldUrlValidation = publicationData.url.startsWith("http://")

    const parts = publicationData.url.split(".")
    const extension = parts[parts.length -1]
    
    let extensionValidation = false

    if(goodExtension.includes(extension)) {
        extensionValidation = true
    }

    // riittää kun jompi kumpi on käytössä
    const urlValidation = (newUrlValidation || oldUrlValidation) ?? extensionValidation

    const descriptionValidation = publicationData.description.length < 100
    const titleValidation = publicationData.title.length > 2

    return {
        urlValidation: urlValidation ? "OK" : "Pitää olla https:// tai http://",
        descriptionValidation: descriptionValidation ? 'OK' : 'Liian pitkä kuvaus.',
        titleValidation: titleValidation ? ' OK' : 'Liian lyhyt otsikko.',
        isAllValid: urlValidation ?? descriptionValidation ?? titleValidation
    }    

})

const createNewPublication = () => {

    if(!isDataValid.value.isAllValid) return

    publicationData.title = ''
    publicationData.description = ''
    publicationData.url = ''
}

/*

{
    "title":"title",
    '"description":"kuvaus",'
    "url":"https://i.redd.it/4abzoaca95p81.jpg",
    "visibility":2,
    "tags":[]
}

*/


</script>

<template>
<div class="publication-form">
    <label>Otsikko</label>
    <small class="errorMessage">{{ isDataValid.titleValidation }}</small>
    <input v-model="publicationData.title" type="text"/>

    <label>Kuvaus</label>
    <small class="errorMessage">{{ isDataValid.descriptionValidation }}</small>
    <input v-model="publicationData.description" type="text"/>

    <label>URL</label>
    <small class="errorMessage">{{ isDataValid.urlValidation }}</small>
    <input v-model="publicationData.url" type="text"/>

    <button :disabled="!isDataValid.isAllValid" @click="createNewPublication">Lähetä</button>
</div>          
</template>

<style scoped>

.publication-form {
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
    width: 200px;
}

.errorMessage {
    color: red;
}

</style>