import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.alertUser = this.alertUser.bind(this);
    }

    handleUsernameChange(value) {
        this.setState({ username: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    alertUser() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <div className="login-component">
                <input type="text" onChange={e => this.handleUsernameChange(e.target.value)} />
                <input type="text" onChange={e => this.handlePasswordChange(e.target.value)} />
                <button onClick={this.alertUser}>Login</button>
            </div>
        )
    }
}

export default Login;