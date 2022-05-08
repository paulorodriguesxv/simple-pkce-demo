import React from 'react';
import App from './App';

import {Buffer} from 'buffer';

import {
    AuthProvider, 
    AuthService, 
    useAuth, 
  } from 'react-oauth2-pkce'

Buffer.from('anything','base64');

const authService = new AuthService({ 
    clientId: 't5UBZW17fcSSGoPvI4GxGbXFtac1DA1maok2M6LO', 
    provider: 'http://localhost:8000/o', 
    scopes: ["read", "write"],     
    redirectUri: 'http://localhost:3000',
    tokenEndpoint: 'http://localhost:8000/o/token/'
});  

function SecuredApp() {
    const { authService } = useAuth(); 

    const login = async () => authService.authorize(); 
    const logout = async () => authService.logout(); 

    if (authService.isPending()) { 
        return <div>
            Loading...
            <button onClick={() => { logout(); login(); }}>Reset</button>
        </div>
    }

    if (!authService.isAuthenticated()) { 
        return (
            <div>
                <p>Not Logged in yet</p>
                <button onClick={login}>Login</button>
            </div>
        )
    }

    const token = authService.getAuthTokens(); 
    return ( 
        <div>
            <button onClick={logout}>Logout</button>
            <App />
        </div>
    );
}

function WrappedSecuredApp() {
    return (
        <AuthProvider authService={authService} > 
            <SecuredApp />
        </AuthProvider>
    );
}

export default WrappedSecuredApp;