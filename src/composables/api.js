import { createFetch } from "@vueuse/core";

export const useApi = createFetch({
    baseUrl: 'http://vara.onrender.com/api'
})

