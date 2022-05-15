<script setup>
import { onClickOutside } from '@vueuse/core';
import { inject, reactive, ref } from 'vue';
import { authService } from '../../services/authService';
import RegistrationView from '../registration/RegistrationView.vue';

const showLoginView = inject('showLoginView')

const credentials = reactive({
    username: '',
    password:''
})

const target = ref(null)

onClickOutside(target, () => {
    showLoginView.value = false
})

const login = async () => {
    await authService.useLogin(credentials)

    credentials.password = ''
    credentials.username = ''
}

const showRegistration = ref(false)

</script>

<template>   

    <form v-if="!showRegistration" ref="target" class="login" @submit.prevent="login">

        <label for="">Käyttäjänimi</label>
        <input v-model="credentials.username" type="text">

        <label for="">Salasana</label>
        <input v-model="credentials.password" type="password">

        <button type="submit">Kirjaudu</button>
        <p>Voit rekisteröityä <span @click="showRegistration = !showRegistration" class="click">tästä</span> </p>
    </form>
    <form v-else class="login" ref="target">
        <RegistrationView></RegistrationView>
        <p>Voit kirjautua <span @click="showRegistration = !showRegistration" class="click">tästä</span></p>

    </form>
</template>