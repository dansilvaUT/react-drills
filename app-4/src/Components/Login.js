import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleUsernameChange(value) {
        this.setState({ username: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    handleClick() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <section>
                <input onChange={e => this.handleUsernameChange(e.target.value)} />
                <input onChange={e => this.handlePasswordChange(e.target.value)} />
                <button onClick={this.handleClick}>Login</button>
            </section>
        )
    }
}

export default Login;