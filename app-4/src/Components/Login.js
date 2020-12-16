import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleUsernameChange(value) {
        this.setState({ username: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    submitCredentials() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <div className="login-component">
                <input type="text" onChange={e => this.handleUsernameChange(e.target.value)} />
                <input type="password" onChange={e => this.handlePasswordChange(e.target.value)} />
                <button onClick={() => this.submitCredentials()}>Login</button>
            </div>
        )
    }
}

export default Login;