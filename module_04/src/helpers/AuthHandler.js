import Cookies from 'js-cookie'

function isLogged() {
    let token = Cookies.get('token')
    return (token) ? true : false;
}

export default isLogged