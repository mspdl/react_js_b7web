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

        register: async (name, stateLoc, email, password) => {
            const json = await apiFetchPost(
                '/user/signup',
                { name, email, password, state: stateLoc }
            )
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