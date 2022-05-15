<script setup>

import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { userService } from '../../services/userService';
import { isAuth } from '../../store';
import FadeLoader from 'vue-spinner/src/FadeLoader.vue';

const { data, isFinished, error} = userService.useGetAll()

const router = useRouter()

watch(isAuth, () => {
    if(!isAuth.value) {
        router.push('/')
    }
})

</script>

<template>

<div v-if="error">Tapahtui virhe</div>
<fade-loader v-else-if="!isFinished"></fade-loader> 
<div v-else-if="data?.users">
    <div v-for="user in data.users">
        {{ user.username }}
    </div>
</div>


</template>

<style>

</style>