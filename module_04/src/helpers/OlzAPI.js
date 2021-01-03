import { apiFetchGet, apiFetchPost } from './GenericAPI'

export const useApi = () => {
    return {
        login: async (email, password) => {
            const json = await apiFetchPost(
                '/user/sigin',
                { email, password }
            );
            return json;
        },

        getStates: async () => {
            const json = await apiFetchGet(
                '/states'
            );
            return json.states;
        }
    }
}