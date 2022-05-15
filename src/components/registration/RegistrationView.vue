<script setup>
import { reactive, ref } from 'vue';
import { registrationService } from '../../services/registrationService'

const confirmPassword = ref('')
const registrationSuccess = ref(false)

const userData = reactive({
    password: '',
    email: '',
    username: ''
})

const register = async () => {
    const { data, error } = await registrationService.useRegister(userData)

    if(data.value && !error.value) {
        registrationSuccess.value = true
    }
}

</script>

<template>

    <div v-if="registrationSuccess">Rekisteröityminen onnistui</div>

    <form v-else @submit.prevent="register" class="">
        <label>Käyttäjänimi</label>
        <input v-model="userData.username" type="text" maxlength="100"/>
        
        <label>Sähköposti</label>
        <input v-model="userData.email" type="email" />

        <label>Salasana</label>
        <input v-model="userData.password" type="password" />

        <label>Salasana uudelleen</label>
        <input v-model="confirmPassword" type="password">

        <button @click="createNewUser">Lähetä</button>    
    </form>
</template>
