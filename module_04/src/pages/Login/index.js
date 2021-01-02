import React, { useState } from 'react'
import { PageContainer, PageTitle } from '../../components/MainComponents.js'
import { doLogin } from '../../helpers/AuthHandler'
import useApi from '../../helpers/OlzAPI'
import { PageArea } from './styled.js'

function Login() {

    const api = useApi();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [keepPassword, setKeepPassword] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, keepPassword);
            window.location.href = '/';
        }
    }

    return <>
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">E-mail</div>
                        <div className="area-input">
                            <input type="email" disabled={disabled} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Password</div>
                        <div className="area-input">
                            <input type="password" disabled={disabled} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Keep Password</div>
                        <div className="area-input">
                            <input type="checkbox" disabled={disabled} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button disabled={disabled}>Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    </>
}

export default Login