import { useStorage } from "@vueuse/core";
import { computed } from "vue";


export const globalState = useStorage('global_state', {
    accessToken: null
})


export const isAuth = computed(() => {
    return globalState.value.accessToken != null
})

