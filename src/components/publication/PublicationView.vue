<script setup>

defineProps({
    publication: Object
})

</script>

<template>
    {{ publication.title }}
    <img :src="publication.url">
    {{ publication.owner ? publication.owner.username : 'Anon' }}
</template>

<style scoped>
img {
    width: 400px;
    margin: 20px;
}
</style>