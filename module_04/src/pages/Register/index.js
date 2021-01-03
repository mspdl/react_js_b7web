import React, { useEffect, useState } from 'react'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents.js'
import { doLogin } from '../../helpers/AuthHandler'
import { useApi } from '../../helpers/OlzAPI'
import { PageArea } from './styled.js'

function Register() {

    const api = useApi();

    const [name, setName] = useState('')
    const [stateLoc, setStateLoc] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [stateList, setStateList] = useState([])

    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('')
        setDisabled(false);

        if (password !== confirmPassword) {
            setError("The passwords entered do not match");
            return;
        }

        const json = await api.register(name, stateLoc, email, password);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }
    }

    return <>
        <PageContainer>
            <PageTitle>Register</PageTitle>
            <PageArea>

                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">Full Name</div>
                        <div className="area-input">
                            <input
                                type="text"
                                disabled={disabled}
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">State</div>
                        <div className="area-input">
                            <select value={stateLoc} onChange={(e) => setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateList.map((state, index) =>
                                    <option key={index} value={state._id}>{state.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">E-mail</div>
                        <div className="area-input">
                            <input
                                type="email"
                                disabled={disabled}
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Password</div>
                        <div className="area-input">
                            <input
                                type="password"
                                disabled={disabled}
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Confirm Password</div>
                        <div className="area-input">
                            <input
                                type="password"
                                disabled={disabled}
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button disabled={disabled}>Register</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    </>
}

export default Register