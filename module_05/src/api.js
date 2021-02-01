let BASE_URL = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        const res = await fetch(BASE_URL + '/categories');
        const json = await res.json();
        return json;
    },
    getProducts: async (category, page, search) => {

        let fields = {};
        if (category !== 0) {
            fields.category = category;
        }
        if (page > 0) {
            fields.page = page;
        }
        if (search !== '') {
            fields.search = search;
        }

        let queryString = new URLSearchParams(fields).toString();
        const res = await fetch(BASE_URL + '/products?' + queryString);
        const json = await res.json();
        return json;
    }
};