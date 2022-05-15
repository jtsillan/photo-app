import { useApi } from "../composables/api"

export const publicationService = {

    useGetAll() {
        return useApi('/publications').json()
    },

    usePost(payload) {
        return useApi('/publications').post(payload).json()
    },

    useGetById(publicationId) {
        return useApi(`/publications/${publicationId}`).json()
    },

    async useGetByPage(page = 1) {
        return await useApi('/publications?page=' + page).json()
    }
}