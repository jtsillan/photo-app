import { useApi } from "../composables/api"

export const userService = {
    useGetAll() {
        return useApi('/users').json()
    }
}