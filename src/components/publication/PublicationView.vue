<script setup>

defineProps({
    publication: Object
})

</script>

<template>
    <div>
        {{ publication.title }}
        <img :src="publication.url"/>
        {{ publication.owner ? publication.owner.username : 'Anon' }}        
    </div>
</template>

<style scoped>
img {
    width: 400px;
    margin: 20px;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(250, 254, 254);
    padding: 10px;
}
</style>