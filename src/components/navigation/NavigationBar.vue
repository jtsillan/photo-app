<script setup>
import { provide, ref } from 'vue';
import { RouterLink } from 'vue-router'
import { authService } from '../../services/authService';
import { isAuth } from '../../store';
import LoginView from '../login/LoginView.vue';

const showLoginView = ref(false)

provide('showLoginView', showLoginView)

const logout = async () => {
    await authService.useLogout()
    showLoginView.value = false
}
</script>

<template>
    <div class="nav">    
        <router-link to="/">Julkaisut</router-link>
        <router-link to="/create">Uusi</router-link>
        <router-link v-if="isAuth" to="/users">Käyttäjät</router-link>

        <a href="#" v-if="isAuth" @click.prevent="logout">Ulos</a>
        <a href="#" v-else @click.prevent="showLoginView = true">Kirjaudu</a>
    </div>

    <LoginView v-if="showLoginView && !isAuth"></LoginView>

</template>