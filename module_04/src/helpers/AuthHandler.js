import Cookies from 'js-cookie';

export const isLogged = () => {
    let token = Cookies.get('token')
    return (token) ? true : false;
}

export const doLogin = (token, keepPassword = false) => {
    if (keepPassword) {
        Cookies.set('token', token, { expires: 30 })
    } else {
        Cookies.set('token', token)
    }
}

export const doLogout = () => {
    Cookies.remove('token')
}