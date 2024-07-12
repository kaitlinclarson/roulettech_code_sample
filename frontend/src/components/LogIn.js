import './LogIn.css';
import { useState } from 'react';

function LogIn(props) {
    let { loginModalOpen, setLoginModalOpen, setDisplayName } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    function onLogInClick() {
        setLoginModalOpen(!loginModalOpen);
    }

    function handleLogin() {
        let URL = 'auth/login';
        let body = JSON.stringify({ "username": username, "password": password });
        fetch(URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: body
        })
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                else return response.json()
            })
            .then((json) => {
                console.log(json);
                setDisplayName(username);
                localStorage.setItem("auth", json.token);
                localStorage.setItem("username", username);
                setLoginModalOpen(!loginModalOpen);
                return json;
            })
            .catch((error) => {
                console.log(error);
                setLoginError(true);
            });
    }

    function handleRegister() {
        let URL = 'auth/signup';
        let body = JSON.stringify({ "username": username, "password": password });
        fetch(URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: body
        })
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                else return response.json()
            })
            .then((json) => console.log(json))
            .then(() => handleLogin())
            .catch((error) => console.log(error));
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <div className="login">
            <div className="modal">
                <button onClick={onLogInClick}>[X] Close</button>
                <form>
                    <label>Username: <input type="text" value={username} onChange={handleUsernameChange} /></label>
                    <label>Password: <input type="password" value={password} onChange={handlePasswordChange} /></label>
                    <input type="button" value="Log In" onClick={handleLogin} />
                    <input type="button" value="Register" onClick={handleRegister} />
                </form>
                {loginError ? <div className="error">ERROR: Could not log in</div> : ''}
            </div>
        </div>
    );
}

export default LogIn;
