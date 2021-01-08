import Cookies from 'js-cookie'
import qs from 'qs'
const BASEAPI = "http://alunos.b7web.com.br:501"

export const apiFetchPost = async (endpoint, body) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    const res = await fetch(BASEAPI + endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const json = await res.json();
    if (json.notallowed) {
        window.location.href = '/login';
        return;
    }
    return json;
}

export const apiFetchGet = async (endpoint, body = []) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);
    const json = await res.json();
    if (json.notallowed) {
        window.location.href = '/login';
        return;
    }
    return json;
}

export const apiFetchFile = async (endpoint, body) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.append('token', token);
        }
    }
    const res = await fetch(BASEAPI + endpoint, {
        method: 'POST',
        body
    });
    const json = await res.json();
    if (json.notallowed) {
        window.location.href = '/login';
        return;
    }
    return json;
}