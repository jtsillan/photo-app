import { createFetch } from "@vueuse/core";
import { authService } from "../services/authService";
import { globalState, isAuth } from "../store";

export const useApi = createFetch({
    baseUrl: 'https://vara.onrender.com/api',
    options: {
        beforeFetch({ options }) {
            if(isAuth.value) {
                // auth.header käytössä
                options.headers = {
                    Authorization: `Bearer ${globalState.value.accessToken}`
                }
            }

            //return { options }
        },

        async onFetchError({data, error, response}) {
          
            if(response.status === 401 && data?.msg instanceof Array && data?.msg.includes("Unauthorized")){                
                await authService.useLogout()
            }

        }
    }
})

