let BASE_URL = 'https://api.b7web.com.br/devsfood/api'

export default {
    getCategories: async () => {
        const res = await fetch(BASE_URL + '/categories');
        const json = await res.json();
        return json;
    }
};