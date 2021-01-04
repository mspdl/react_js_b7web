import { apiFetchGet, apiFetchPost } from './GenericAPI';

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
        },

        getCategories: async () => {
            const json = await apiFetchGet(
                '/categories'
            );
            return json.categories;
        },

        getAds: async (options) => {
            const json = await apiFetchGet(
                '/ad/list',
                options
            );
            return json;
        }
    }
}