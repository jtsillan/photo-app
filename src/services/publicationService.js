import { useApi } from "../composables/api"

export const publicationService = {

    useGetAll() {
        return useApi('/publications').json()
    }
}