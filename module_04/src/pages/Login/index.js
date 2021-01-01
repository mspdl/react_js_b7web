import React from 'react'
import { PageContainer, PageTitle } from '../../components/MainComponents.js'
import { PageArea } from './styled.js'

function Login() {
    return <>
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <form>
                    <label className="area">
                        <div className="area-title">E-mail</div>
                        <div className="area-input">
                            <input type="e-mail" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Password</div>
                        <div className="area-input">
                            <input type="password" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Keep Password</div>
                        <div className="area-input">
                            <input type="checkbox" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button>Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    </>
}

export default Login